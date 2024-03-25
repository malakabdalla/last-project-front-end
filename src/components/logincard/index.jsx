/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/Auth/index";

import "./loginCard.css";
function LoginCard() {
  // const { setUser } = useAuth();
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   const { username, password } = formData;

  //   const predefinedUsername = "demdemo";
  //   const predefinedPassword = "demo123456789";

  //   if (username === predefinedUsername && password === predefinedPassword) {
  //     setUser(username);
  //     navigate("/language");
  //   } else {
  //     console.error("Invalid credentials");
  //   }
  // }
  return (
    <>
      <div className="login-container">
        <div className="gradient-background"> </div>
        <section>
          <div className="flex bg-white items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
            <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
              <div className="mb-2 flex justify-center"></div>
              <Link to="/">
                <p className="mt-2 text-center text-sm text-gray-600">
                  <img src="./MotherTongue.svg" />
                  Mother Tongue
                </p>
              </Link>
              <h2 className="text-center text-2xl font-bold leading-tight text-black">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Don't have an account?
                <Link to="/register">
                  <span className="link">Sign UP</span>
                </Link>
              </p>
              <form className="mt-8" method="POST" action="#">
                <div className="space-y-5">
                  <div>
                    <div className="mt-2">
                      <input
                        placeholder="Username"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between"></div>
                    <div className="mt-2">
                      <input
                        placeholder="Password"
                        type="Password"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm placeholder:text-gray-400 placeholder-opacity-50 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <Link to="/language">
                      <button
                        className="inline-flex w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7 text-white color "
                        type="button"
                      >
                        Continue
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
              <div className="mt-3 space-y-3">
                <button
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                  type="button"
                >
                  <span className="mr-2 inline-block">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-rose-500"
                    >
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </span>
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>
          <div className="demo-account">
            <p className="para-login">Demo Account:</p>
            <p className="para-login"> Username: demdemo</p>
            <p className="para-login">Password: demo123456789</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default LoginCard;
