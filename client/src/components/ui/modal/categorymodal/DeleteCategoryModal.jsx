import ModalWrapper from "../../ModalWrapper";
import Input from "../../Input";
import Button from "../../Button";

const DeleteCategoryModal = ({ categories, onClose, onConfirm }) => {
  return (
    <ModalWrapper onClose={onClose}>
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4">

        {/* HEADER */}
        <h1 className="text-xl font-bold text-center bg-red-500 text-white p-2 rounded-lg">
          Delete Category
        </h1>

        {/* MESSAGE */}
        <p className="text-gray-600 text-center">
          Are you sure you want to delete this category?
        </p>

        {/* CATEGORY PREVIEW */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Category Name
          </label>

          <Input
            value={categories.name || ""}
            readOnly
            className="text-center bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* WARNING */}
        <p className="text-xs text-red-500 text-center">
          This action cannot be undone.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-end gap-3 mt-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={() => onConfirm?.(categories?.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DeleteCategoryModal;