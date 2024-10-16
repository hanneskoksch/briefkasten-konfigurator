import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { ResetIcon, ShuffleIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BetaVersionLabel from "./components/beta_version_label/beta_version_label";
import StampSelectorBoxes from "./components/configurator/stamp_selector_boxes";
import StampsImageOverlay from "./components/image/stamps_image_overlay";
import { Button } from "./components/ui/button";
import NameField from "./img/nametag.png";
import { Base } from "./model/image_data_models";
import {
  addStamp,
  changeBaseColor,
  randomConfiguration,
  removeStamp,
  resetConfiguration,
  setStampPositions,
  toggleNameField,
} from "./slices/configurationSlice";
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
  const colorState = useSelector(
    (state: RootState) => state.configuration.color,
  );
  const nameFieldState = useSelector(
    (state: RootState) => state.configuration.nameField,
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

  function onResetConfiguration(): void {
    dispatch(resetConfiguration());
    setResetSwapyTrigger((val) => !val);
  }

  function onRandomConfiguration(): void {
    dispatch(resetConfiguration());
    dispatch(randomConfiguration());
    setResetSwapyTrigger((val) => !val);
  }

  /**
   * A different letterbox color gets selected.
   */
  function onColorSelect(color: BaseColor): void {
    console.log(color);
    dispatch(changeBaseColor(color));
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

        <div className="m-5 max-w-[400px] space-y-8">
          <div className="space-y-2">
            <h3 className="font-semibold">Grundfarbe</h3>
            <RadioGroup
              defaultValue={colorState}
              onValueChange={(newValue) => onColorSelect(newValue as BaseColor)}
              value={colorState}
            >
              <div className="flex flex-row items-center space-x-3">
                {baseDatabase.map((base: Base) => (
                  <div className="flex flex-col space-y-2" key={base.name}>
                    <RadioGroupItem
                      value={base.enum}
                      id={base.enum}
                      className={base.enum}
                    />
                    <Label
                      htmlFor={base.enum}
                      className="text-center font-normal"
                    >
                      {base.name}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="font-semibold">Adressfeld</h3>
              <p className="text-xs text-gray-500">
                Lassen Sie ein Feld frei, um Ihren Namen auf den Briefkasten zu
                schreiben.
              </p>
            </div>
            <div className="px-4">
              <Switch
                checked={nameFieldState}
                onCheckedChange={() => onToggleNameField(!nameFieldState)}
              />
            </div>
          </div>

          <div className="space-y-0.5">
            <h3 className="font-semibold">Stempel</h3>
            <p className="text-xs text-gray-500">
              Wählen Sie aus verschiedenen Stempeln, um Ihren Briefkasten zu
              personalisieren, und ziehen Sie diese dann an die gewünschte
              Stelle.
            </p>
            <StampSelectorBoxes onClick={onAddStampList} />
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Konfiguration</h3>
            <div className="space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onResetConfiguration()}
              >
                <ResetIcon className="mr-2 h-3 w-3" />
                Zurücksetzen
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onRandomConfiguration()}
              >
                <ShuffleIcon className="mr-2 h-3 w-3" />
                Zufällig
              </Button>
            </div>
          </div>
        </div>
      </div>
      <BetaVersionLabel />
    </div>
  );
}

export default App;
