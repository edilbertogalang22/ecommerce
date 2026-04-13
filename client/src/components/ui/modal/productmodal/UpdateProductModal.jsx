import { useEffect, useState } from "react";
import ModalWrapper from "../../ModalWrapper";
import Input from "../../Input";
import Button from "../../Button";

const UpdateProductModal = ({
  product,
  categories = [],
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category_id: "",
    image_url: "",
  });

  // reset form kapag nagbago product
  useEffect(() => {
    if (!product) return;

    setFormData({
      name: product.name || "",
      description: product.description || "",
      price: product.price || "",
      stock: product.stock || "",
      category_id: product.category_id || "",
      image_url: product.image_url || "",
    });
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
      category_id: Number(formData.category_id),
    };

    onSubmit?.(product.id, payload);
    onClose?.();
  };

  if (!product) return null;

  return (
    <ModalWrapper onClose={onClose}>
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6">
        {/* HEADER */}
        <h1 className="text-lg font-bold text-center bg-gray-700 text-white py-2 rounded-lg">
          Update Product
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
          {/* IMAGE PREVIEW */}
          <img
            src={formData.image_url || "/fallback.png"}
            alt={formData.name}
            onError={(e) => (e.target.src = "/fallback.png")}
            className="w-28 h-28 object-cover mx-auto rounded-lg border shadow-sm"
          />

          {/* IMAGE URL */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Image URL
            </label>
            <Input
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
            />
          </div>

          {/* NAME */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Product Name
            </label>
            <Input name="name" value={formData.name} onChange={handleChange} />
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
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* PRICE + STOCK */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-gray-600">Price</label>
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

          {/* BUTTONS */}
          <div className="flex justify-end gap-3 mt-4">
            <Button type="button" onClick={onClose} variant="danger">
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={
                !formData.name || !formData.price || !formData.category_id
              }
              variant="secondary"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default UpdateProductModal;
