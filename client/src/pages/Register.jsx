import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import useRegister from "../hooks/useRegister";
import { cn } from "../lib/utils";
const Register = () => {
  const { register, handleChange, handleSubmit, loading, message, isError } =
    useRegister();
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-md p-6 sm:p-8">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-blue-500 mb-6">
          Sign up
        </h1>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {message && (
            <p
              className={cn(
                "text-center mb-4 text-white rounded-xl px-2 py-3",
                isError ? "bg-red-500" : "bg-green-500",
              )}
            >
              {message}
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <Input
                type="text"
                name="firstname"
                placeholder="Enter your first name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={register.firstname}
                onChange={handleChange}
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <Input
                type="text"
                name="lastname"
                placeholder="Enter your last name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={register.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address
              </label>
              <Input
                name="address"
                placeholder="Enter your address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={register.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Contact
              </label>
              <Input
                name="contact"
                placeholder="Enter your contact number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={register.contact}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={register.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={register.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={register.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Button */}
          <Button
            variant="primary"
            size="md"
            className={cn(
              "px-20 py-3 mx-auto flex items-center justify-center",
              loading ? "opacity-50 cursor-not-allowed" : "opacity-100",
            )}
          >
            {loading ? "loading..." : "Registered"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Register;
