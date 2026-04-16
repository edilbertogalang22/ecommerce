import { useState } from "react";
import ModalWrapper from "../../../ModalWrapper";
import Input from "../../../Input";
import Button from "../../../Button";

const AddCategoryModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Category name is required");
      return;
    }

    onSubmit?.(formData);
    onClose?.();
  };

  return (
    <ModalWrapper onClose={onClose}>
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6">
        {/* HEADER */}
        <h1 className="text-xl font-bold text-center bg-blue-500 text-white p-2 rounded-lg">
          Add Category
        </h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
          {/* NAME */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Category Name
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter category name"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Description
            </label>
            <Input
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter category description"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3 mt-4">
            <Button type="button" onClick={onClose} variant="secondary">
              Cancel
            </Button>

            <Button
              type="submit"
              variant="primary"
              disabled={!formData.name.trim()}
            >
              Create
            </Button>
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default AddCategoryModal;
