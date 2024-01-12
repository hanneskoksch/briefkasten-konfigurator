import { Stamp } from "../../model/image_data_models";
import StampImage from "./stamp_image";

interface StampsImageOverlayProps {
  stamps: Stamp[];
}

const StampsImageOverlay = ({ stamps }: StampsImageOverlayProps) => {
  return (
    <>
      {stamps.map((stamp, i) => (
        <StampImage stamp={stamp} key={i} />
      ))}
    </>
  );
};

export default StampsImageOverlay;
