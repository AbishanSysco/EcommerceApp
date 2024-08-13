import React, { useState } from "react";
import { UserLogin } from "../api/UserService";
import log from "loglevel";

const SignUp = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  };
  const [userData, setUserData] = useState(initialState);
  const [response, setResponse] = useState({});
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);

    try {
      const response = await UserLogin(userData);
      setResponse(response.data);
    } catch (error) {
      log.info(`error of getting data  :${error.message}`);
      setError(error.message);
    }

    setUserData(initialState);
  };

  const handleUserData = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };
  return (
    <form
      onSubmit={onSubmit}
      className="bg-[#F9FAFB] w-full flex items-center mt-5 mb-5"
    >
      <div className="h-max mx-auto flex flex-col items-center">
        <img
          className="h-[40px] w-[47px] mb-5"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt=""
        />

        <div className="bg-white shadow-xl p-8 flex flex-col gap-4 text-sm">
          <h1 className="text-xl font-bold text-center pb-3">
            Sign up to new account
          </h1>
          <div>
            <label className="text-gray-600 font-bold inline-block pb-2">
              Username
            </label>
            <input
              className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
              type="text"
              name="username"
              value={userData.username}
              onChange={handleUserData}
              required
            />
          </div>
          <div>
            <label className="text-gray-600 font-bold inline-block pb-2">
              Email
            </label>
            <input
              className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={userData.email}
              onChange={handleUserData}
              required
            />
          </div>
          <div>
            <label className="text-gray-600 font-bold inline-block pb-2">
              Password
            </label>
            <input
              className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
              type="password"
              name="password"
              placeholder="******"
              value={userData.password}
              onChange={handleUserData}
              required
            />
          </div>

          <div>
            <label className="text-gray-600 font-bold inline-block pb-2">
              Mobile No
            </label>
            <input
              className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
              type="number"
              name="phoneNumber"
              placeholder="07********"
              value={userData.phoneNumber}
              onChange={handleUserData}
             min={10}
             minLength={10}
              required
            />
          </div>

          <div>
            <label className="text-gray-600 font-bold inline-block pb-2">
              Address
            </label>
            <input
              className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
              type="text"
              name="address"
              value={userData.address}
              onChange={handleUserData}
              required
            />
          </div>

          <div>
            <input
              className="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]"
              type="submit"
              value="Sign up"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
