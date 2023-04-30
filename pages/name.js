import useStore from "@/lib/store";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Link from "next/link";

//ADD CODE TO VALIDATE THE NAME
const Login = () => {
  const [name, setName] = useState("");
  const name1 = useStore((state) => state.name);
  const setName1 = useStore((state) => state.setName);
  const setPickLocation = useStore((state) => state.setPickLocation);
  const setDropLocation = useStore((state) => state.setDropLocation);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // let name = e.target.value;
    console.log();
    console.log(name);

    setName1(name);
  };

  function handleChange(event) {
    setName(event.target.value);
  }

  // add this function to booking page
  // const getPickCoordinates=()=>{
  //     const pickLocation="ambala" // make it dynamic
  //     fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickLocation}.json?`+
  //     new URLSearchParams({
  //       access_token: "pk.eyJ1IjoiYmhhdnlhZ3VwdGExMjciLCJhIjoiY2xncGY3Mml3MHJ5MzNkcDkya2JoZWxxaCJ9.8UoSDJE-QV7fWvj3pMcwcw",
  //       limit:1
  //     })
  //     )
  //     .then(response=> response.json())
  //     .then(data=>{
  //         console.log(data.features[0].center);
  //         setPickLocation(data.features[0].center);
  //     })
  // }
  // const getDropCoordinates=()=>{
  //     const dropLocation="delhi" // make it dynamic
  //     fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropLocation}.json?`+
  //     new URLSearchParams({
  //       access_token: "pk.eyJ1IjoiYmhhdnlhZ3VwdGExMjciLCJhIjoiY2xncGY3Mml3MHJ5MzNkcDkya2JoZWxxaCJ9.8UoSDJE-QV7fWvj3pMcwcw",
  //       limit:1
  //     })
  //     )
  //     .then(response=> response.json())
  //     .then(data=>{
  //         console.log(data.features[0].center);
  //         setDropLocation(data.features[0].center);
  //     })
  // }
  useEffect(() => {
    // getPickCoordinates();
    // getDropCoordinates();
  }, []);

  return (
    <div className=" text-4xl  h-screen flex temp">
      <div className="max-w-s mh-full  m-auto flex-col items-center bg-white rounded-lg sm:border sm:border-primaryBorder shadow-default py-40 px-16">
        <h1 className=" text-blackfont-medium text-primary mt-4 mb-12 text-center">
          Enter Your Name
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div className="w-full">
            {/* <label htmlFor="number">Enter your Mobile Number</label> */}
            {/* <br /> */}
            <input
              type="text"
              name="name"
              className={` w-full p-2 text-primary border rounded-md outline-none text-xl transition duration-150 ease-in-out mb-4`}
              id="number"
              placeholder="Enter Your Name"
              onChange={handleChange}
              value={name}
              autoComplete="off"
            />
          </div>
          <br />
          <div className="flex justify-center items-center mt-6">

            <Link href={{ pathname: "/home" }}>

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
