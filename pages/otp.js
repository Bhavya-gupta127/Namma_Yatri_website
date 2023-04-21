import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

//ADD CODE TO VALIDATE THE OTP
const Login = () => {
  const [OTP, setOTP] = useState("");
  // const phone = 1234;
  // const phone = this.location.query.id;
  // const { id } = getQueryParams(window.location.search);
  var router = useRouter();
  var id = router.query["id"];
  const phone = id;
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // let OTP = e.target.value;
    console.log();
    console.log(OTP);
  };

  function handleChange(event) {
    setOTP(event.target.value);
  }

  return (
    <div className=" text-4xl  h-screen flex temp">
      <div className=" mh-full  m-auto flex-col items-center bg-white rounded-lg sm:border sm:border-primaryBorder shadow-default py-40 px-16">
        <h1 className="text-blackfont-medium text-primary mt-4 mb-12 text-center">
          Enter OTP
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div className="w-screen max-w-xs">
            <label htmlFor="number" className="text-sm">
              Login using the OTP sent to +91-{phone}
            </label>
            {/* <br /> */}
            <input
              type="text"
              name="OTP"
              className={` w-full p-2 text-primary border rounded-md outline-none text-xl mt-2 transition duration-150 ease-in-out`}
              id="number"
              placeholder="Enter 4 digit OTP"
              onChange={handleChange}
              value={OTP}
              autoComplete="off"
            />
          </div>
          <a href="#">
            <span className="text-sm">Resend</span>
          </a>
          <br />
          <br />
          <div className="flex justify-center items-center mt-6">
            <Link href={{ pathname: "/name" }}>
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
