import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useStore from "@/lib/store";
import { useQuery } from "@tanstack/react-query";
// import "@/styles/radio.css";

const Home = () => {
  const [fareMin, setFareMin] = useState("₹822");
  const [fareMax, setFareMax] = useState("₹872");
  const [time, setTime] = useState("57");
  const [distance, setDistance] = useState("36.05");
  const [preference, setPreference] = useState(true);

  function handleChange(event) {
    setPhone(event.target.value);
  }

  return (
    <div className=" text-4xl  h-screen flex  temp">
      <div className=" mh-full  m-auto flex-col items-center bg-white  rounded-lg sm:border sm:border-primaryBorder shadow-default py-40 px-16">
        <h1 className="text-blackfont-medium text-primary mt-4 mb-8 text-center">
          Request Auto Ride
        </h1>
        <div className="border p-5 py-10">
          <h1 className=" text-blackfont-medium text-primary mt-4  text-center font-bold">
            {fareMin}-{fareMax}
          </h1>
          <div className="text-center	 text-base text-gray-600 mb-15 mt-3">
            {distance}km.{time}min
          </div>
          <hr />
          <h5 className="mt-5 text-lg text-bold text-center">
            Booking Preference
          </h5>
          <form>
            {/* <label> */}
            <div className="text-xl mt-5">
              <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] flex items-center  ">
                <input
                  className="mr-3"
                  type="radio"
                  name="flexRadioDefault"
                  id="radioDefault01"
                  // value={preference ? true : false}
                  checked={true}
                />
                <label
                  class="mr-5 mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  for="radioDefault01"
                >
                  Auto-assign a driver{" "}
                  <span className="bg-green-500 text-white text-lg rounded-full p-0.5 px-2.5">
                    {" 🗲  Faster "}
                  </span>
                </label>
              </div>
              <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] mt-5">
                <input
                  className="mr-3"
                  type="radio"
                  name="flexRadioDefault"
                  id="radioDefault02"
                  // value={!preference ? true : false}
                  // checked={preference === true}
                />
                <label
                  class="mr-5 mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  for="radioDefault02"
                >
                  Choose between multiple drivers
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="flex justify-center items-center mt-6">
          <Link href={{ pathname: "/choose" }}>
            <button
              className={`w-full bg-black text-white font-medium bg-green py-2 px-4 text-xl rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Request Ride
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
