import RideCard from "@/components/rideCard";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { Router } from "next/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Choose = () => {
  const [seconds, setSeconds] = useState(15);
  const router = useRouter();
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(myInterval);
        router.push("/"); //go to next page here
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <div className=" text-4xl  h-screen flex  temp">
      <div className=" mh-full  m-auto flex-col items-center bg-white  rounded-lg sm:border sm:border-primaryBorder shadow-default py-14 px-16">
        <h1 className="text-blackfont-medium text-primary  mb-5 text-center">
          Choose your Ride
        </h1>
        <div className="text-blackfont-medium text-sm  mb-5 text-center">
          Confirming selected ride in: {seconds} s
        </div>

        <RideCard dis="1" name="Ganesh" rating="5.0" price="822" timer="5" />
        <RideCard dis="1" name="Ganesh" rating="5.0" price="822" timer="40" />

        <div className="text-blackfont-medium text-sm  mb-5 text-center">
          💵Pay Driver using Cash/UPI
        </div>
      </div>
    </div>
  );
};

export default Choose;
