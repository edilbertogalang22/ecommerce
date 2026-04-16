import ModalWrapper from "../../../ModalWrapper";
import Input from "../../../Input";
import Button from "../../../Button";

const ViewUsersModal = ({ onClose, user }) => {
  return (
    <ModalWrapper onClose={onClose}>
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6">
        {/* HEADER */}
        <h1 className="text-xl font-bold text-center bg-gray-500 text-white p-2 rounded-lg">
          User Details
        </h1>

        {/* CONTENT */}
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div>
            <label className="text-sm text-gray-600">First Name</label>
            <Input value={user?.firstname || "N/A"} readOnly />
          </div>

          <div>
            <label className="text-sm text-gray-600">Last Name</label>
            <Input value={user?.lastname || "N/A"} readOnly />
          </div>

          <div>
            <label className="text-sm text-gray-600">Address</label>
            <Input value={user?.address || "N/A"} readOnly />
          </div>

          <div>
            <label className="text-sm text-gray-600">Contact</label>
            <Input value={user?.contact || "N/A"} readOnly />
          </div>

          <div className="col-span-2">
            <label className="text-sm text-gray-600">Email</label>
            <Input value={user?.email || "N/A"} readOnly />
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-end mt-6">
          <Button type="button" onClick={onClose} variant="secondary">
            Close
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ViewUsersModal;
