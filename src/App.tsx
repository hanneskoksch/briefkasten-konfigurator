import base from "./img/base-blue.png";
import "./App.css";
import { useState } from 'react';
import Heading from "./components/heading";
import Checkbox from "./components/checkbox";
import AddStampBox from "./components/add_stamp_box";
import stampsDatabase from "./utils/stamps_database";
import StampList from "./components/stamp_list";
import StampsImageOverlay from "./components/stamps_image_overlay";
import { StampsMap } from './model/image_data_models' 

function App() {

  const [stamps, setStamps] = useState<StampsMap>({0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8:null});

  const [selected, setSelected] = useState<number>(0);
  const [nameField, setNameField] = useState<boolean>(false);

  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const div = event.currentTarget;
    setSelected(parseInt(div.title));
  };

  function addNewStamp(): void {
    for (let i = 0; i < 9; i++) {
      if(stamps[i] == null){
        console.log("Ja");
        let newStamps = stamps;
        newStamps[i] = stampsDatabase[0];
        console.log(newStamps);
        setStamps(newStamps);
        return;
      }
    }
  }

  return (
    <div className="bg-gray-800 h-screen">
    <div className="flex flex-wrap">
      <div className="bg-white rounded-xl m-10">
        <div className="relative">
          <img className="relative top-0 left-0" src={base} alt="Briefkasten" />
          <StampsImageOverlay stamps={stamps} />
        </div>
      </div>
      <div className="bg-white rounded-xl m-10 p-5">
        <Heading text="Stempel"/>
        <StampList stamps={stamps} />
        <AddStampBox onClick={addNewStamp}/>
        <div className="h-52 w-52 grid grid-rows-3 grid-flow-col gap-1">
          <div className={"rounded-md hover:bg-gray-400 " + (selected === 0 ? 'bg-gray-800' : 'bg-gray-200')} onClick={divClickedHandler} title="0"></div>
          <div className={"rounded-md hover:bg-gray-400 " + (selected === 3 ? 'bg-gray-800' : 'bg-gray-200')} onClick={divClickedHandler} title="3"></div>
          <div className={"rounded-md hover:bg-gray-400 " + (selected === 6 ? 'bg-gray-800' : 'bg-gray-200')} onClick={divClickedHandler} title="6"></div>

          <div className={"rounded-md hover:bg-gray-400 " + (selected === 1 ? 'bg-gray-800' : 'bg-gray-200')} onClick={divClickedHandler} title="1"></div>
          <div className={"rounded-md hover:bg-gray-400 " + (selected === 4 ? 'bg-gray-800' : 'bg-gray-200')} onClick={divClickedHandler} title="4"></div>
          <div className={"rounded-md hover:bg-gray-400 " + (selected === 7 ? 'bg-gray-800' : 'bg-gray-200')} onClick={divClickedHandler} title="7"></div>

          <div className={"rounded-md hover:bg-gray-400 " + (selected === 2 ? 'bg-gray-800' : 'bg-gray-200')} onClick={divClickedHandler} title="2"></div>
          <div className={"rounded-md hover:bg-gray-400 " + (selected === 5 ? 'bg-gray-800' : 'bg-gray-200')} onClick={divClickedHandler} title="5"></div>
          <div className={"rounded-md hover:bg-gray-400 " + (selected === 8 ? 'bg-gray-800' : 'bg-gray-200')} onClick={divClickedHandler} title="8"></div>

        </div>
        <Heading text="Namensschild"/>
        <Checkbox checked={nameField} setChecked={setNameField}/>
      </div>
      </div>
    </div>
  );
}

export default App;
