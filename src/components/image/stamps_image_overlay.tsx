import { useEffect, useRef, useState } from "react";
import { Swapy, createSwapy } from "swapy";
import { Configuration } from "../../model/image_data_models";
import { stampsDatabase } from "../../utils/stamps_database";
import StampImage from "./stamp_image";

interface StampsImageOverlayProps {
  initialStamps: Configuration["stamps"];
  onPositionChange: (stamps: Configuration["stamps"]) => void;
  onRemoveStamp: (entry: string) => void;
  resetTrigger: boolean;
}

/**
 * Component to display the stamps on the image and to allow the user to move them around.
 * @param initialStamps The redux stamps state.
 * @param onPositionChange Callback function to update the parent component / redux state with the new stamp positions.
 * @param onRemoveStamp Callback function to remove a stamp from the parent component / redux state.
 * @param resetTrigger Trigger to reset the swapy component (called when a stamp is added or removed by parent component).
 * @returns
 */
const StampsImageOverlay = ({
  initialStamps,
  onPositionChange,
  onRemoveStamp,
  resetTrigger,
}: StampsImageOverlayProps) => {
  // Swapy reference needed when using manual swappping.
  const swapyRef = useRef<Swapy | null>(null);

  // Internal, separate state (not redux state) to keep track of the stamps.
  const [stamps, setStamps] = useState(initialStamps);

  // Keep track if there are any actual stamps in the initialStamps list.
  const [stampsIncludesStamp, setStampsIncludesStamp] = useState(false);

  useEffect(() => {
    // Reset the stamps state when the resetTrigger changes.
    setStamps(initialStamps);

    // Check if there are any stamps in the initialStamps.
    const stampsArray = Object.values(initialStamps);
    setStampsIncludesStamp(stampsArray.some((stamp) => stamp !== null));
  }, [resetTrigger, initialStamps]);

  useEffect(() => {
    const container = document.querySelector(".container")!;

    // Only initiate swapy if there exist stamps
    if (!stampsIncludesStamp) {
      return;
    }

    swapyRef.current = createSwapy(container, {
      swapMode: "hover",
      manualSwap: true,
    });

    swapyRef.current.onSwap(({ data }) => {
      // swapyRef.current?.setData({ object: data.object });
      setStamps(data.object);
      onPositionChange(data.object);
    });

    return () => {
      swapyRef.current?.destroy();
    };
  }, [onPositionChange, stampsIncludesStamp]);

  useEffect(() => {
    swapyRef.current?.setData({ object: stamps });
  }, [stamps]);

  const getItemByPosition = (position: number) => {
    const entry = stamps[position];
    if (!entry) {
      return;
    }

    const stamp = stampsDatabase.find((stamp) => entry.includes(stamp.name));
    if (!stamp) {
      return;
    }

    return (
      <div className="item" data-swapy-item={`${entry}`} key={`${entry}`}>
        <StampImage
          stamp={stamp}
          onDelete={() => {
            onRemoveStamp(entry);
          }}
        />
      </div>
    );
  };

  return (
    <div className="container">
      {[...Array(9)].map((_, i) => (
        <div
          key={i + 1}
          className={`slot ${getItemByPosition(i + 1)}`}
          data-swapy-slot={i + 1}
        >
          {getItemByPosition(i + 1)}
        </div>
      ))}
    </div>
  );
};

export default StampsImageOverlay;
