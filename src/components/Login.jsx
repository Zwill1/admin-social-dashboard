import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("password");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/dashboard", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <>
      <main className="h-screen flex">
        <div className="mx-auto container items-center justify-center flex">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 py-10 px-10 w-10/12 lg:w-1/2 rounded-2xl"
          >
            <div className="py-1 flex justify-between flex-wrap">
              <label htmlFor="email" className="w-full lg:w-1/4">
                Email address:
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="p-1 w-full"
              />
            </div>

            <div className="py-1 flex justify-between flex-wrap">
              <label htmlFor="password" className="w-full lg:w-1/4">
                Password:
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className=" p-1 w-full"
              />
            </div>

            <div className="py-1">
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded">
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
