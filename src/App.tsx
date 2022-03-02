import "./App.css";
import Heading from "./components/configurator/heading";
import Checkbox from "./components/configurator/checkbox";
import AddStampBox from "./components/configurator/add_stamp_box";
import { baseDatabase, stampsDatabase } from "./utils/stamps_database";
import StampList from "./components/configurator/stamp_list";
import StampsImageOverlay from "./components/image/stamps_image_overlay";
import BaseColorList from "./components/configurator/base_color_list";
import { BaseColor } from "./utils/enums";
import NameField from "./img/nametag.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import {
  addStamp,
  changeStampPosition,
  removeStamp,
} from "./slices/stampSlice";
import { changeColor } from "./slices/colorSlice";
import { toggleNameField } from "./slices/nameFieldSlice";

function App() {
  const dispatch = useDispatch();

  // State
  const stampsState = useSelector((state: RootState) => state.stamps.value);
  const colorState = useSelector((state: RootState) => state.color.value);
  const nameFieldState = useSelector(
    (state: RootState) => state.namefield.value
  );

  /**
   * Toggles the name field state.
   * @param isActive The state of the checkbox.
   */
  function onToggleNameField(isActive: boolean): void {
    dispatch(toggleNameField(isActive));
  }

  /**
   * A new regular stamp gets added.
   */
  function onAddStampList(): void {
    dispatch(addStamp({ ...stampsDatabase[0], position: 0 }));
  }

  /**
   * A regular stamp gets removed.
   * @param index The index of the element which gets removed.
   */
  function onRemoveStampList(index: number): void {
    dispatch(removeStamp(index));
  }

  /**
   * A different letterbox color gets selected.
   */
  function onColorSelect(color: BaseColor): void {
    dispatch(changeColor(color));
  }

  /**
   * Changes position of the stamp on the letterbox.
   * @param oldPosition The old position on the letterbox (number from 0 - 8)
   * @param newPosition The new position on the letterbox (number from 0 - 8)
   */
  function moveStampToNewPosition(oldPosition: number, newPosition: number) {
    dispatch(changeStampPosition({ oldPosition, newPosition }));
  }

  function getBase(): string {
    return baseDatabase.find((e) => e.enum === colorState)?.image!;
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
            {nameFieldState && (
              <img
                className="absolute top-0 left-0"
                src={NameField}
                alt="Namensschild"
              />
            )}
            <StampsImageOverlay stamps={stampsState} />
          </div>
        </div>
        <div className="bg-white rounded-xl p-5">
          <Heading text="Grundfarbe" />
          <BaseColorList onClick={onColorSelect} baseColor={colorState} />
          <Heading text="Stempel" />
          <StampList
            stamps={stampsState}
            onRemove={onRemoveStampList}
            onPositionChange={moveStampToNewPosition}
          />
          <AddStampBox onClick={onAddStampList} />
          <Heading text="Namensschild" />
          <Checkbox checked={nameFieldState} setChecked={onToggleNameField} />
        </div>
      </div>
    </div>
  );
}

export default App;
