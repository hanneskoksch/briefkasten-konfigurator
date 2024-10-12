import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BetaVersionLabel from "./components/beta_version_label/beta_version_label";
import BaseColorList from "./components/configurator/base_color_list";
import Checkbox from "./components/configurator/checkbox";
import Heading from "./components/configurator/heading";
import StampSelectorBoxes from "./components/configurator/stamp_selector_boxes";
import StampsImageOverlay from "./components/image/stamps_image_overlay";
import NameField from "./img/nametag.png";
import { changeColor } from "./slices/colorSlice";
import {
  addStamp,
  removeStamp,
  setStampPositions,
} from "./slices/configurationSlice";
import { toggleNameField } from "./slices/nameFieldSlice";
import { RootState } from "./store";
import { BaseColor } from "./utils/enums";
import { baseDatabase, stampsDatabase } from "./utils/stamps_database";

function App() {
  const dispatch = useDispatch();
  const [resetSwapyTrigger, setResetSwapyTrigger] = useState(false);

  // State
  const configurationState = useSelector(
    (state: RootState) => state.configuration,
  );
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

  function onAddStampList(index: number): void {
    dispatch(addStamp(stampsDatabase[index]));
    setResetSwapyTrigger((val) => !val);
  }

  function onRemoveStampList(entry: string): void {
    dispatch(removeStamp(entry));
    setResetSwapyTrigger((val) => !val);
  }

  /**
   * A different letterbox color gets selected.
   */
  function onColorSelect(color: BaseColor): void {
    dispatch(changeColor(color));
  }

  function onSwap(stampPositions: { [key: number]: string | null }): void {
    dispatch(setStampPositions(stampPositions));
  }

  function getBase(): string {
    return (
      baseDatabase.find((base) => base.enum === colorState)?.image ??
      // return the first element if no base is not found
      baseDatabase[0].image
    );
  }

  return (
    <div className="h-screen">
      <div className="flex flex-wrap">
        <div className="rounded-xl bg-white">
          <div className="relative">
            <img
              className="relative left-0 top-0"
              src={getBase()}
              alt="Briefkasten"
            />
            <div className="perspective-container absolute">
              <div className=" perspective">
                <StampsImageOverlay
                  initialStamps={configurationState.stamps}
                  onPositionChange={onSwap}
                  onRemoveStamp={onRemoveStampList}
                  resetTrigger={resetSwapyTrigger}
                />
              </div>
            </div>
            {nameFieldState && (
              <img
                className="absolute left-0 top-0"
                src={NameField}
                alt="Namensschild"
              />
            )}
          </div>
        </div>
        <div className="rounded-xl bg-white p-5">
          <Heading text="Grundfarbe" />
          <BaseColorList onClick={onColorSelect} baseColor={colorState} />
          <Heading text="Namensschild" />
          <div className="text-center">
            <Switch
              checked={nameFieldState}
              onCheckedChange={() => onToggleNameField(!nameFieldState)}
            />
          </div>
          <Heading text="Stempel" />
          <StampSelectorBoxes onClick={onAddStampList} />
        </div>
      </div>
      <BetaVersionLabel />
    </div>
  );
}

export default App;
