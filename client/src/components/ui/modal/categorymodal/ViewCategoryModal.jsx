import ModalWrapper from "../../ModalWrapper";
import Input from "../../Input";
import Button from "../../Button";

const ViewCategoryModal = ({ categories, onClose }) => {
  const formattedDate = categories?.created_at
    ? new Date(categories.created_at).toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "N/A";

  return (
    <ModalWrapper onClose={onClose}>
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6">
        {/* HEADER */}
        <h1 className="text-xl font-bold text-center bg-gray-500 text-white p-2 rounded-lg">
          View Category
        </h1>

        {/* CONTENT */}
        <div className="flex flex-col gap-4 mt-5">
          {/* NAME */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Category Name
            </label>
            <Input
              value={categories?.name || ""}
              readOnly
              className="text-center bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Description
            </label>
            <Input
              value={categories?.description || ""}
              placeholder="Optional"
              readOnly
              className="text-center bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* DATE */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Date Created
            </label>
            <Input
              value={formattedDate}
              readOnly
              className="text-center bg-gray-100 cursor-not-allowed"
            />
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-end mt-6">
          <Button type="button" variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ViewCategoryModal;
