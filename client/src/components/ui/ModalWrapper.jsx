const ModalWrapper = ({ children, onClose }) => {
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-xl w-full max-w-xl relative shadow-lg flex flex-col">
        {/* close button (NOT wrapping children) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black cursor-pointer"
        >
          ✕
        </button>

        {children}
      </div>
    </section>
  );
};

export default ModalWrapper;
