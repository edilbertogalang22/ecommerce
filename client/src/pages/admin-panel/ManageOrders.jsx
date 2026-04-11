import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
  CardImage,
  CardFooter,
} from "../../components/ui/Card";


const ManageOrders = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-6 ">
      <div className="flex p-6 md:p-8 bg-gray-200 items-center justify-center mb-6 md:mb-8">
        <h1 className="text-blue-400 font-bold text-xl md:text-2xl">
          Manage Orders
        </h1>
      </div>

      {/* Status  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        <Card>
          <CardHeader>
            <CardTitle>Order ORD-002</CardTitle>
            <CardDescription>Customer: Maria Santos</CardDescription>
            <CardDescription>Email: maria@email.com</CardDescription>
            <CardDescription>Date: 3/25/2026</CardDescription>
          </CardHeader>

          <CardContent>
            <CardTitle>Items:</CardTitle>
            <CardImage
              src="https://tse2.mm.bing.net/th/id/OIP.29GW-JI1dW2mvtNrl0S1CwHaE5?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Product 1"
            />
            <CardTitle>Camera</CardTitle>
            <CardDescription>Quantity: 1</CardDescription>
          </CardContent>

          <CardFooter>
            <CardTitle>Shipping Address:</CardTitle>
            <CardDescription>456 Bonifacio Avenue</CardDescription>
            <CardDescription>Quezon City, 1100</CardDescription>
            <CardDescription>Phone: 092454787</CardDescription>
          </CardFooter>
          <div className="flex flex-row justify-between items-center mb-4 rounded-lg gap-5">
            <label className="text-md font-medium ml-3 ">Status:</label>
            <select
              name="status"
              id="status"
              className="border border-gray-200 py-1 rounded-lg shadow text-left w-full mr-1"
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Shipped">Shipped</option>
              <option value="Deliverd">Deliverd</option>
              <option value="Cancel">Cancel</option>
            </select>
          </div>
        </Card>
        {/* Card 2 */}
        <Card>
          <CardHeader>
            <CardTitle>Order ORD-002</CardTitle>
            <CardDescription>Customer: Maria Santos</CardDescription>
            <CardDescription>Email: maria@email.com</CardDescription>
            <CardDescription>Date: 3/25/2026</CardDescription>
          </CardHeader>

          <CardContent>
            <CardTitle>Items:</CardTitle>
            <CardImage
              src="https://tse2.mm.bing.net/th/id/OIP.29GW-JI1dW2mvtNrl0S1CwHaE5?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Product 1"
            />
            <CardTitle>Camera</CardTitle>
            <CardDescription>Quantity: 1</CardDescription>
          </CardContent>

          <CardFooter>
            <CardTitle>Shipping Address:</CardTitle>
            <CardDescription>456 Bonifacio Avenue</CardDescription>
            <CardDescription>Quezon City, 1100</CardDescription>
            <CardDescription>Phone: 092454787</CardDescription>
          </CardFooter>
          <div className="flex flex-row justify-between items-center mb-4 rounded-lg gap-5">
            <label className="text-md font-medium ml-3 ">Status:</label>
            <select
              name="status"
              id="status"
              className="border border-gray-200 py-1 rounded-lg shadow text-left w-full mr-1"
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Shipped">Shipped</option>
              <option value="Deliverd">Deliverd</option>
              <option value="Cancel">Cancel</option>
            </select>
          </div>
        </Card>
        {/* Card 3 */}
        <Card>
          <CardHeader>
            <CardTitle>Order ORD-002</CardTitle>
            <CardDescription>Customer: Maria Santos</CardDescription>
            <CardDescription>Email: maria@email.com</CardDescription>
            <CardDescription>Date: 3/25/2026</CardDescription>
          </CardHeader>

          <CardContent>
            <CardTitle>Items:</CardTitle>
            <CardImage
              src="https://tse2.mm.bing.net/th/id/OIP.29GW-JI1dW2mvtNrl0S1CwHaE5?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Product 1"
            />
            <CardTitle>Camera</CardTitle>
            <CardDescription>Quantity: 1</CardDescription>
          </CardContent>

          <CardFooter>
            <CardTitle>Shipping Address:</CardTitle>
            <CardDescription>456 Bonifacio Avenue</CardDescription>
            <CardDescription>Quezon City, 1100</CardDescription>
            <CardDescription>Phone: 092454787</CardDescription>
          </CardFooter>
          <div className="flex flex-row justify-between items-center mb-4 rounded-lg gap-5">
            <label className="text-md font-medium ml-3 ">Status:</label>
            <select
              name="status"
              id="status"
              className="border border-gray-200 py-1 rounded-lg shadow text-left w-full mr-1"
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Shipped">Shipped</option>
              <option value="Deliverd">Deliverd</option>
              <option value="Cancel">Cancel</option>
            </select>
          </div>
        </Card>
        {/* Card 4 */}
        <Card>
          <CardHeader>
            <CardTitle>Order ORD-002</CardTitle>
            <CardDescription>Customer: Maria Santos</CardDescription>
            <CardDescription>Email: maria@email.com</CardDescription>
            <CardDescription>Date: 3/25/2026</CardDescription>
          </CardHeader>

          <CardContent>
            <CardTitle>Items:</CardTitle>
            <CardImage
              src="https://tse2.mm.bing.net/th/id/OIP.29GW-JI1dW2mvtNrl0S1CwHaE5?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Product 1"
            />
            <CardTitle>Camera</CardTitle>
            <CardDescription>Quantity: 1</CardDescription>
          </CardContent>

          <CardFooter>
            <CardTitle>Shipping Address:</CardTitle>
            <CardDescription>456 Bonifacio Avenue</CardDescription>
            <CardDescription>Quezon City, 1100</CardDescription>
            <CardDescription>Phone: 092454787</CardDescription>
          </CardFooter>
          <div className="flex flex-row justify-between items-center mb-4 rounded-lg gap-5">
            <label className="text-md font-medium ml-3 ">Status:</label>
            <select
              name="status"
              id="status"
              className="border border-gray-200 py-1 rounded-lg shadow text-left w-full mr-1"
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Shipped">Shipped</option>
              <option value="Deliverd">Deliverd</option>
              <option value="Cancel">Cancel</option>
            </select>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default ManageOrders;
