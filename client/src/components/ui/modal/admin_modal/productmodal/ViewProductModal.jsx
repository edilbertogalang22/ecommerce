import ModalWrapper from "../../../ModalWrapper";
import Input from "../../../Input";
import Button from "../../../Button";

const ViewProductModal = ({ product, onClose, categories }) => {
  if (!product) return null;

  const categoryName = categories?.find(
    (cat) => cat.id === product.category_id,
  )?.name;

  return (
    <ModalWrapper onClose={onClose}>
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-5">
        {/* HEADER */}
        <h1 className="text-lg font-bold text-center bg-gray-500 text-white py-2 rounded-lg">
          Product Details
        </h1>

        {/* IMAGE */}
        <img
          src={product.image_url}
          alt={product.name}
          onError={(e) => (e.target.src = "/fallback.png")}
          className="w-32 h-32 object-cover mx-auto rounded-lg border shadow-sm"
        />

        {/* FIELDS */}
        <div className="flex flex-col gap-3">
          <div>
            <label className="text-sm text-gray-600">Product Name</label>
            <Input value={product.name || "N/A"} readOnly />
          </div>

          <div>
            <label className="text-sm text-gray-600">Description</label>
            <textarea
              value={product.description || "N/A"}
              readOnly
              className="mt-1 w-full border rounded-lg p-2 bg-gray-100"
            />
          </div>

          {/* PRICE + STOCK */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-gray-600">Price (₱)</label>
              <input
                value={`₱ ${Number(product.price || 0).toLocaleString()}`}
                readOnly
                className="mt-1 w-full border rounded-lg p-2 bg-gray-100"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Stock</label>
              <input
                value={product.stock ?? 0}
                readOnly
                className="mt-1 w-full border rounded-lg p-2 bg-gray-100"
              />
            </div>
          </div>

          {/* CATEGORY */}
          <div>
            <label className="text-sm text-gray-600">Category</label>
            <Input
              value={categoryName || "N/A"}
              readOnly
              className="bg-gray-100"
            />
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-end pt-2">
          <Button onClick={onClose} variant="secondary">
            Close
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ViewProductModal;
