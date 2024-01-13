import { FaCheck } from "react-icons/fa";

interface CheckboxProps {
  checked: boolean;
  setChecked: (isActive: boolean) => void;
}

const Checkbox = ({ checked, setChecked }: CheckboxProps) => {
  return (
    <div className="flex justify-center">
      <div
        className={
          "flex h-8 w-8 cursor-pointer items-center justify-center rounded " +
          (checked ? "bg-gray-800 text-white" : "border-2 bg-gray-200")
        }
        onClick={() => setChecked(!checked)}
      >
        {checked && <FaCheck />}
      </div>
    </div>
  );
};

export default Checkbox;
