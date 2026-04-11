import ModalWrapper from "../ModalWrapper";
import Input from "../Input";
import Button from "../Button";

const DeleteUsersModal = ({ user, onClose, onConfirm }) => {
  if (!user) return null;

  return (
    <ModalWrapper onClose={onClose}>
      <div className="flex flex-col gap-4">
        <h1 className=" mt-5 text-xl font-bold text-center border rounded-lg bg-blue-400 p-2">
          Delete User
        </h1>

        <p className="text-center mt-2">
          Are you sure you want to delete this user?
        </p>

        <Input
          value={`${user.firstname} ${user.lastname}`}
          readOnly
          className="text-center bg-gray-100 cursor-not-allowed"
        />

        <div className="flex justify-end gap-2 mt-4">
          <Button variant="secondary" size="md" onClick={onClose}>
            Cancel
          </Button>

          <Button variant="danger" size="md" onClick={() => onConfirm(user.id)}>
            Delete
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DeleteUsersModal;
