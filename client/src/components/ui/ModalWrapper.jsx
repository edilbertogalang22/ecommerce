import { cn } from "../../lib/utils";
import Button from "./Button";
const ModalWrapper = ({ children, onClose }) => {
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-16 rounded-xl w-full max-w-xl relative shadow-lg flex flex-col">
        <Button
          variant="outline"
          size="sm"
          onClick={onClose}
          className={cn(
            "absolute top-4 righ-4 bg-transparent hover:bg-gray-100 text-gray-500 hover:text-gray-700 cursor-pointer",
          )}
        >
          {children}
        </Button>
      </div>
    </section>
  );
};
export default ModalWrapper;
