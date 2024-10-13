import { Button } from "@/components/ui/button";
import { stampsDatabase } from "../../utils/stamps_database";

interface StampSelectorBoxesProps {
  onClick: (index: number) => void;
}

const StampSelectorBoxes = ({ onClick }: StampSelectorBoxesProps) => {
  return (
    <div className="flex space-x-3 pt-2">
      {stampsDatabase.map((stamp, i) => (
        <Button
          variant="secondary"
          size="icon"
          key={i}
          onClick={() => onClick(i)}
          className="size-12 p-2"
        >
          <img src={stamp.image} alt="Stempel" />
        </Button>
      ))}
    </div>
  );
};

export default StampSelectorBoxes;
