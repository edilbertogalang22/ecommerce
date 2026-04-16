import { useState } from "react";
import ModalWrapper from "../../../ModalWrapper";
import Input from "../../../Input";
import Button from "../../../Button";

const AddProductModal = ({ onClose, onSubmit, categories = [] }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category_id: "",
    image_url: "",
    featured: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.category_id) {
      alert("Please fill all required fields");
      return;
    }

    const payload = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
      category_id: Number(formData.category_id),
    };

    onSubmit?.(payload);
    onClose?.();
  };

  return (
    <ModalWrapper onClose={onClose}>
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6">
        {/* HEADER */}
        <h1 className="text-xl font-bold text-center bg-blue-500 text-white p-2 rounded-lg">
          Add Product
        </h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
          {/* NAME */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Product Name
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description..."
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* PRICE + STOCK */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Price (₱)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Stock</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              />
            </div>
          </div>

          {/* CATEGORY */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Category
            </label>
            <select
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* IMAGE */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Image URL
            </label>
            <Input
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

          {/* FEATURED */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="w-4 h-4 accent-blue-500"
            />
            <label className="text-sm text-gray-600">Featured Product</label>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3 mt-4">
            <Button type="button" onClick={onClose} variant="secondary">
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={
                !formData.name || !formData.price || !formData.category_id
              }
              variant="primary"
            >
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default AddProductModal;
