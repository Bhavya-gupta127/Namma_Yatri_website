import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useStore from "@/lib/store";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  // const [phone, setPhone] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function handleChange(event) {
    setPhone(event.target.value);
  }
//   <div className=" text-4xl  h-screen flex  temp">
//   <div className=" mh-full  m-auto flex-col items-center bg-white  rounded-lg sm:border sm:border-primaryBorder shadow-default py-40 px-16">
//     <h1 className="text-blackfont-medium text-primary mt-4 mb-12 text-center">
//       Choose Your Location
//     </h1>

//     <form>
//       <div className="w-screen max-w-xs">
//         {/* <label htmlFor="number">Enter your Mobile Number</label> */}
//         {/* <br /> */}
//         <input
//           type="text"
//           name="from"
//           className={` w-full p-2 text-primary border rounded-md outline-none text-xl transition duration-150 ease-in-out mb-4`}
//           id="from"
//           placeholder="From"
//           onChange={handleChange}
//           value={from}
//           autoComplete="off"
//         />
//         <input
//           type="text"
//           name="to"
//           className={` w-full p-2 text-primary border rounded-md outline-none text-xl transition duration-150 ease-in-out mb-4`}
//           id="to"
//           placeholder="To"
//           onChange={handleChange}
//           value={to}
//           autoComplete="off"
//         />
//       </div>
//       <br />
//       <div className="flex justify-center items-center mt-6">
//         <button
//           className={`w-full bg-black text-white font-medium bg-green py-2 px-4 text-xl rounded border border-green focus:outline-none focus:border-green-dark`}
//           onClick={(e) => {
//             e.preventDefault();
//             refetch();
//           }}
//         >
//           Continue
//         </button>
//         {/* </Link> */}
//       </div>
//     </form>
//   </div>
// </div>
  return (
   <></>
  );
};

export default Home;
