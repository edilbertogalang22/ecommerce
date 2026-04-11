import { useState, useEffect } from "react";
import ModalWrapper from "../ModalWrapper";
import Input from "../Input";
import Button from "../Button";

const UpdateUsersModal = ({ user, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstname: user?.firstname || "",
    lastname: user?.lastname || "",
    address: user?.address || "",
    contact: user?.contact || "",
    email: user?.email || "",
  });

  useEffect(() => {
    setFormData({
      firstname: user?.firstname || "",
      lastname: user?.lastname || "",
      address: user?.address || "",
      contact: user?.contact || "",
      email: user?.email || "",
    });
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user.id, formData);
  };

  return (
    <ModalWrapper onClose={onClose}>
      <h1 className=" mt-5 text-xl font-bold text-center border rounded-lg bg-blue-400 p-2">
        Update User Details
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mt-5">
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

        <Input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="col-span-2"
          placeholder="Email"
        />

        <Button
          type="submit"
          variant="secondary"
          size="md"
          className="col-span-2"
        >
          Update User
        </Button>
      </form>
    </ModalWrapper>
  );
};

export default UpdateUsersModal;
