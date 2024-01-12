import { FaCheck } from "react-icons/fa";

interface CheckboxProps {
  checked: boolean;
  setChecked: Function;
}

const Checkbox = ({ checked, setChecked }: CheckboxProps) => {
  return (
    <div className="flex justify-center">
      <div
        className={
          "h-8 w-8 rounded flex justify-center items-center cursor-pointer " +
          (checked ? "bg-gray-800 text-white" : "bg-gray-200 border-2")
        }
        onClick={() => setChecked(!checked)}
      >
        {checked && <FaCheck />}
      </div>
    </div>
  );
};

export default Checkbox;
