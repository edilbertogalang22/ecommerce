import useManageProduct from "../../hooks/useManageProduct";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Search, Eye, Pencil, Trash2, CopyPlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardFooter,
  CardDescription,
  CardImage,
} from "../../components/ui/Card";
const ManageProducts = () => {
  const {
    search,
    handleSearchChange,
    filteredProducts,
    handleCategoryChange,
    selectedCategory,
    categories,
    handleSortPriceChange,
    sortOrderPrice,
  } = useManageProduct();
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="flex p-6 md:p-8 bg-gray-200 items-center justify-center mb-6 md:mb-8">
        <h1 className="text-blue-400 font-bold text-xl md:text-2xl">
          Manage Products
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        {/* LEFT SIDE (search + filter) */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          {/* SEARCH INPUT */}
          <div className="relative w-full sm:w-64">
            <Input
              placeholder="Search products name..."
              className="border pl-10 pr-4 py-2 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={handleSearchChange}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>

          {/* CATEGORY DROPDOWN */}
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 bg-white text-gray-700"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
          <select
            value={sortOrderPrice}
            onChange={handleSortPriceChange}
            className="border px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 bg-white text-gray-700"
          >
            <option value="">Sort by Price</option>
            <option value="low-high">Low → High</option>
            <option value="high-low">High → Low</option>
          </select>
        </div>

        {/* RIGHT SIDE (button) */}
        <div className="w-full md:w-auto">
          <Button
            variant="primary"
            size="md"
            className="w-full md:w-auto flex items-center justify-center shadow-sm"
          >
            <CopyPlus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center py-10 text-gray-500">
            <p className="text-lg font-medium">No products found</p>
            <p className="text-sm">Try adjusting your search or filter</p>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <CardImage
                  src={product.image_url || "https://via.placeholder.com/150"}
                  alt={product.name}
                />
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.category_name}</CardDescription>
              </CardHeader>

              <CardContent>
                <p>{product.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-bold text-blue-500">₱ {product.price}</p>

                  <p className="text-gray-500 font-medium">
                    Stock: {product.stock}
                  </p>
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  View
                </Button>

                <Button variant="outline" size="sm" className="ml-2">
                  <Pencil className="w-4 h-4 mr-2" />
                  Edit
                </Button>

                <Button variant="outline" size="sm" className="ml-2">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};
export default ManageProducts;
