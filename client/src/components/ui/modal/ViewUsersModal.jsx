import ModalWrapper from "../ModalWrapper";
import Input from "../Input";
import Button from "../Button";

const ViewUsersModal = ({ onClose, user }) => {
  return (
    <ModalWrapper onClose={onClose}>
      <h1 className=" mt-5 text-xl font-bold text-center border rounded-lg bg-blue-400 p-2">
        View User Details
      </h1>

      <form className="grid grid-cols-2 gap-4 mt-5">
        <div>
          <label>First Name</label>
          <Input value={user?.firstname || ""} readOnly />
        </div>

        <div>
          <label>Last Name</label>
          <Input value={user?.lastname || ""} readOnly />
        </div>

        <div>
          <label>Address</label>
          <Input value={user?.address || ""} readOnly />
        </div>

        <div>
          <label>Contact</label>
          <Input value={user?.contact || ""} readOnly />
        </div>

        <div className="col-span-2">
          <label>Email</label>
          <Input value={user?.email || ""} readOnly />
        </div>

        <Button
          type="button"
          onClick={onClose}
          variant="danger"
          size="md"
          className="col-span-2"
        >
          Close
        </Button>
      </form>
    </ModalWrapper>
  );
};

export default ViewUsersModal;
