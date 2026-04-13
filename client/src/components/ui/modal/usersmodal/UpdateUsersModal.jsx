import { useState, useEffect } from "react";
import ModalWrapper from "../../ModalWrapper";
import Input from "../../Input";
import Button from "../../Button";

const UpdateUsersModal = ({ user, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    contact: "",
    email: "",
  });

  // sync user data
  useEffect(() => {
    if (!user) return;

    setFormData({
      firstname: user.firstname || "",
      lastname: user.lastname || "",
      address: user.address || "",
      contact: user.contact || "",
      email: user.email || "",
    });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user?.id) return;

    onSubmit?.(user.id, formData);
    onClose?.();
  };

  return (
    <ModalWrapper onClose={onClose}>
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6">
        {/* HEADER */}
        <h1 className="text-xl font-bold text-center bg-green-500 text-white p-2 rounded-lg">
          Update User
        </h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
          {/* GRID FIELDS */}
          <div className="grid grid-cols-2 gap-3">
            <Input
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="First Name"
            />

            <Input
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Last Name"
            />

            <Input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
            />

            <Input
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact"
            />
          </div>

          {/* EMAIL FULL WIDTH */}
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />

          {/* BUTTONS */}
          <div className="flex justify-end gap-3 mt-2">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>

            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default UpdateUsersModal;
