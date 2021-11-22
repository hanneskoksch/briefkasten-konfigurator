import "./App.css";
import { useState } from "react";
import Heading from "./components/configurator/heading";
import Checkbox from "./components/configurator/checkbox";
import AddStampBox from "./components/configurator/add_stamp_box";
import { baseDatabase, stampsDatabase } from "./utils/stamps_database";
import StampList from "./components/configurator/stamp_list";
import StampsImageOverlay from "./components/image/stamps_image_overlay";
import { Stamp } from "./model/image_data_models";
import BaseColorList from "./components/configurator/base_color_list";
import { BaseColor } from "./utils/enums";
import NameField from "./img/nametag.png";

function App() {
  const [baseColor, setBaseColor] = useState<BaseColor>(BaseColor.Blue);
  const [stamps, setStamps] = useState<(Stamp | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [nameField, setNameField] = useState<boolean>(false);

  function addNewStamp(): void {
    for (let i = 0; i < 9; i++) {
      if (stamps[i] == null) {
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
    console.log(stamps);
  }

  function getBase(): string {
    return baseDatabase.find((e) => e.enum === baseColor)?.image!;
  }

  function setNameFiledState(checked: boolean) {
    const newArray = stamps.slice(); // copy the array
    newArray[0] = null;
    newArray[1] = null;
    setStamps(newArray);
    setNameField(checked);
  }

  return (
    <div className="h-screen">
      <div className="bg-red-200 border-red-400 border-2 rounded text-red-600 px-2 absolute">
        Alpha-Version
      </div>
      <div className="flex flex-wrap">
        <div className="bg-white rounded-xl">
          <div className="relative">
            <img
              className="relative top-0 left-0"
              src={getBase()}
              alt="Briefkasten"
            />
            {nameField && (
              <img
                className="absolute top-0 left-0"
                src={NameField}
                alt="Namensschild"
              />
            )}
            <StampsImageOverlay stamps={stamps} />
          </div>
        </div>
        <div className="bg-white rounded-xl p-5">
          <Heading text="Grundfarbe" />
          <BaseColorList onClick={setBaseColor} baseColor={baseColor} />
          <Heading text="Stempel" />
          <StampList
            stamps={stamps}
            onRemove={removeStamp}
            onPositionChange={moveStampToNewPosition}
          />
          <AddStampBox onClick={addNewStamp} />
          <Heading text="Namensschild" />
          <Checkbox checked={nameField} setChecked={setNameFiledState} />
        </div>
      </div>
    </div>
  );
}

export default App;
