import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const BetaVersionLabel = () => {
  return (
    <Popover>
      <PopoverTrigger className="rounded border-2 border-red-400 bg-red-200 px-2 text-red-600 hover:bg-red-300">
        Beta-Version
      </PopoverTrigger>
      <PopoverContent side="right">
        Es sind noch nicht alle Stempel und Farben verfügbar.
      </PopoverContent>
    </Popover>
  );
};

export default BetaVersionLabel;
