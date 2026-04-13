import ModalWrapper from "../../ModalWrapper";
import Button from "../../Button";

const DeleteProduct = ({ product, onClose, onConfirm }) => {
  if (!product) return null;

  const { id, name, description, price, stock, image_url } = product;

  return (
    <ModalWrapper onClose={onClose}>
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6">
        {/* HEADER */}
        <h1 className="text-white text-xl font-bold text-center bg-red-500 p-2 rounded-lg">
          Delete Product
        </h1>

        <p className="text-gray-600 mt-3 text-center">
          Are you sure you want to delete this product?
        </p>

        {/* PRODUCT PREVIEW */}
        <div className="mt-5 flex flex-col items-center text-center">
          <img
            src={image_url || "/fallback.png"}
            alt={name}
            onError={(e) => (e.target.src = "/fallback.png")}
            className="w-28 h-28 object-cover rounded-lg border shadow-sm"
          />

          <h2 className="mt-3 font-semibold text-gray-800">{name}</h2>

          <p className="text-sm text-gray-500 line-clamp-2">
            {description || "No description"}
          </p>

          <p className="text-blue-500 font-bold mt-1">
            ₱ {Number(price || 0).toLocaleString()}
          </p>

          <p className="text-xs text-gray-400">Stock: {stock ?? 0}</p>
        </div>

        {/* WARNING */}
        <p className="text-xs text-red-400 mt-4 text-center">
          This action cannot be undone.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-3 mt-6">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button variant="danger" onClick={() => onConfirm(id)}>
            Delete
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DeleteProduct;
