const Feature = ({ icon: Icon, title, desc }) => {
  return (
    <div className="text-center">
      <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 text-blue-600">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
};

export default Feature;