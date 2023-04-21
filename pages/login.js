import { useState } from "react";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import Link from "next/link";

//ADD CODE TO VALIDATE THE PHONE NUMBER
const Login = () => {
  const [phone, setPhone] = useState("");

  // const handleFormSubmit = (e) => {
  //   // e.preventDefault();

  //   // let phone = e.target.value;
  //   console.log(phone);
  // };

  function handleChange(event) {
    setPhone(event.target.value);
  }

  return (
    <div className=" text-4xl  h-screen flex bg-white sm:bg-gray-100">
      <div className=" mh-full  m-auto flex-col items-center bg-white rounded-lg sm:border sm:border-primaryBorder shadow-default py-40 px-16">
        <h1 className="text-blackfont-medium text-primary mt-4 mb-12 text-center">
          Enter Mobile number
        </h1>

        <form>
          <div className="w-screen max-w-xs">
            {/* <label htmlFor="number">Enter your Mobile Number</label> */}
            {/* <br /> */}
            <input
              type="text"
              name="phone"
              className={` w-full p-2 text-primary border rounded-md outline-none text-xl transition duration-150 ease-in-out mb-4`}
              id="number"
              placeholder="Enter Mobile number"
              onChange={handleChange}
              value={phone}
              autoComplete="off"
            />
          </div>
          <br />
          <div className="flex justify-center items-center mt-6">
            {/* <Link href="/otp">
              <button
                className={`w-full bg-black text-white font-medium bg-green py-2 px-4 text-xl rounded border border-green focus:outline-none focus:border-green-dark`}
              >
                Continue
              </button>
            </Link> */}
            <Link href={{ pathname: "/otp", query: { id: phone } }}>
              <button
                className={`w-full bg-black text-white font-medium bg-green py-2 px-4 text-xl rounded border border-green focus:outline-none focus:border-green-dark`}
              >
                Continue
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
