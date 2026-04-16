import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

import useAuth from "../hooks/useAuth";
const Login = () => {
  const { formLogin, message, handleChange, handleSubmit } = useAuth();

  return (
    <section className="py-16 bg-white flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md border border-gray-200">
        <h1 className="text-3xl text-center font-semibold text-blue-500">Login</h1>
        <div className="">
          <h2 className="text-2xl font-bold mb-4">Hello!</h2>
          {message && (
            <h2 className="mb-3 text-green-500 font-medium text-center">
              {message}
            </h2>
          )}
        </div>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formLogin.email}
              onChange={handleChange}
              // className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formLogin.password}
              onChange={handleChange}
              // className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <span>Don't have an account? </span>
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </div>
          <Button
            type="submit"
            variant="primary"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </Button>
        </form>
      </div>
    </section>
  );
};
export default Login;
