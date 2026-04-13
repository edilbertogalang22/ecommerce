import ModalWrapper from "../../ModalWrapper";
import Input from "../../Input";
import Button from "../../Button";

const DeleteUsersModal = ({ user, onClose, onConfirm }) => {
  if (!user) return null;

  const handleDelete = () => {
    if (!user?.id) return;
    onConfirm(user.id);
  };

  return (
    <ModalWrapper onClose={onClose}>
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6">
        {/* HEADER */}
        <h1 className="text-xl font-bold text-center bg-red-500 text-white p-2 rounded-lg">
          Delete User
        </h1>

        {/* WARNING TEXT */}
        <p className="text-gray-600 text-center mt-4">
          Are you sure you want to delete this user?
          <br />
          This action cannot be undone.
        </p>

        {/* USER PREVIEW */}
        <div className="mt-5 space-y-3">
          <Input
            value={`${user.firstname || ""} ${user.lastname || ""}`}
            readOnly
            className="text-center bg-gray-100 cursor-not-allowed"
          />

          <Input
            value={user.email || "No email"}
            readOnly
            className="text-center bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-3 mt-6">
          <Button variant="secondary" size="md" onClick={onClose}>
            Cancel
          </Button>

          <Button variant="danger" size="md" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DeleteUsersModal;
