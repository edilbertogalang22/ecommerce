import { useState, useEffect } from "react";
import useManageCategories from "../../../../hooks/useManageCategories";
import ModalWrapper from "../../ModalWrapper";
import Input from "../../Input";
import Button from "../../Button";

const UpdateCategoryModal = ({ categories, onClose, onSubmit }) => {
  const { timeAgo } = useManageCategories();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (categories) {
      setFormData({
        name: categories.name || "",
        description: categories.description || "",
      });
    }
  }, [categories]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit?.(categories.id, {
      ...formData,
      updated_at: new Date().toISOString(),
    });

    onClose?.();
  };

  return (
    <ModalWrapper onClose={onClose}>
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6">
        {/* HEADER */}
        <h1 className="text-xl font-bold text-center bg-green-500 text-white p-2 rounded-lg">
          Update Category
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
              placeholder="Optional description"
            />
          </div>
          {/* SHOW CURRENT DB DATE (READ ONLY) */}{" "}
          <div className="col-span-2">
            {" "}
            <label>Date Updated</label>{" "}
            <Input
              value={
                categories?.updated_at ? timeAgo(categories.updated_at) : ""
              }
              className="text-center bg-gray-100 cursor-not-allowed"
              readOnly
            />{" "}
          </div>
          {/* BUTTONS */}
          <div className="flex justify-end gap-3 mt-4">
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

export default UpdateCategoryModal;
