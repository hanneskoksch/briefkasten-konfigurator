import Heading from "./components/configurator/heading";
import Checkbox from "./components/configurator/checkbox";
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
import StampSelectorBoxes from "./components/configurator/stamp_selector_boxes";
import BetaVersionLabel from "./components/beta_version_label/beta_version_label";

function App() {
  const dispatch = useDispatch();

  // State
  const stampsState = useSelector((state: RootState) => state.stamps.value);
  const colorState = useSelector((state: RootState) => state.color.value);
  const nameFieldState = useSelector(
    (state: RootState) => state.namefield.value,
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
  function onAddStampList(index: number): void {
    dispatch(addStamp(stampsDatabase[index]));
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
      <div className="flex flex-wrap">
        <div className="bg-white rounded-xl">
          <div className="relative">
            <img
              className="relative top-0 left-0"
              src={getBase()}
              alt="Briefkasten"
            />
            <div className="absolute perspective-container">
              <div className=" perspective">
                <StampsImageOverlay stamps={stampsState} />
              </div>
            </div>
            {nameFieldState && (
              <img
                className="absolute top-0 left-0"
                src={NameField}
                alt="Namensschild"
              />
            )}
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl">
          <Heading text="Grundfarbe" />
          <BaseColorList onClick={onColorSelect} baseColor={colorState} />
          <Heading text="Namensschild" />
          <Checkbox checked={nameFieldState} setChecked={onToggleNameField} />
          <Heading text="Stempel" />
          <StampSelectorBoxes onClick={onAddStampList} />
          <StampList
            stamps={stampsState}
            onRemove={onRemoveStampList}
            onPositionChange={moveStampToNewPosition}
          />
        </div>
      </div>
      <BetaVersionLabel />
    </div>
  );
}

export default App;
