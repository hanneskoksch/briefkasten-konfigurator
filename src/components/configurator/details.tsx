import { stampsDatabase } from "@/utils/stamps_database";
import StampDetailsItem from "./stamp_details_item";

interface DetailsProps {
  stampString: string;
  onRemove: (entry: string) => void;
}

function Details({ stampString, onRemove }: DetailsProps) {
  const stamp = stampsDatabase.find((entry) =>
    stampString?.includes(entry.name),
  );

  if (!stamp) {
    return <div>Stempel nicht gefunden</div>;
  }

  return (
    <StampDetailsItem
      stamp={stamp}
      index={0}
      onRemove={() => {
        onRemove(stampString);
      }}
    />
  );
}

export default Details;
