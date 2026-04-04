import { cn } from "../../lib/utils";
const Input = ({ className, ...props }) => {
  return (
    <input
      type="text"
      className={cn(
        "w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500",
        className,
      )}
      {...props}
    />
  );
};

export default Input;
