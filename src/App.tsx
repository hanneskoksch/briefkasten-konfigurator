import base from "./img/base-blue.png";
import "./App.css";
import { useState } from 'react';
import Heading from "./components/heading";
import Checkbox from "./components/checkbox";
import AddStampBox from "./components/add_stamp_box";
import { stampsDatabase } from "./utils/stamps_database";
import StampList from "./components/stamp_list";
import StampsImageOverlay from "./components/stamps_image_overlay";
import { Stamp } from './model/image_data_models' 

function App() {

  const [stamps, setStamps] = useState<(Stamp | null)[]>([null,null,null,null,null,null,null,null,null]);
  const [nameField, setNameField] = useState<boolean>(false);

  function addNewStamp(): void {
    for (let i = 0; i < 9; i++) {
      if(stamps[i] == null){
        const newArray = stamps.slice(); // copy the array
        newArray[i] = stampsDatabase[0];
        setStamps(newArray);
        return;
      }
    }
  }

  function removeStamp(position: number) {
    const newArray = stamps.slice(); // copy the array
    newArray[position] = null;
    setStamps(newArray);
  }

  function moveStampToNewPosition(oldPosition: number, newPosition: number) {
    const newArray = stamps.slice(); // copy the array
    newArray[newPosition] = newArray[oldPosition];
    newArray[oldPosition] = null;
    setStamps(newArray);
    console.log(stamps)
  }

  return (
    <div className="bg-gray-800 h-screen">
    <div className="flex flex-wrap">
      <div className="bg-white rounded-xl m-5">
        <div className="relative">
          <img className="relative top-0 left-0" src={base} alt="Briefkasten" />
          <StampsImageOverlay stamps={stamps} />
        </div>
      </div>
      <div className="bg-white rounded-xl m-5 p-5">
        <Heading text="Stempel"/>
        <StampList stamps={stamps} onRemove={removeStamp} onPositionChange={moveStampToNewPosition}/>
        <AddStampBox onClick={addNewStamp}/>
        <Heading text="Namensschild"/>
        <Checkbox checked={nameField} setChecked={setNameField}/>
      </div>
      </div>
    </div>
  );
}

export default App;
