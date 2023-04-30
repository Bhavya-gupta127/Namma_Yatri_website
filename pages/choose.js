import RideCard from "@/components/rideCard";
import useStore from "@/lib/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Choose = () => {
  const [seconds, setSeconds] = useState(15);
  const [id, setId] = useState("");
  const router = useRouter();
  const rides = useStore((state) => state.rides);
  const token = useStore((state) => state.token);
  const setRides = useStore((state) => state.setRides);
  const setRideDetails = useStore((state) => state.setRideDetails);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(myInterval);
        router.push("/ride"); //go to next page here
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const confirmRide = async (id, token) => {
    const res = await fetch(`/api/confirmRide/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        id,
      }),
    }).then((res) => res.json());

    return res;
  };

  const { data, error, refetch } = useQuery(
    ["confirmRide", id, token],
    () => confirmRide(id, token),
    { enabled: false }
  );

  useEffect(() => {
    if (id !== "") {
      refetch();
    }
    console.log("Here")
  }, [id]);

  useEffect(() => {
    if (data) {
      console.log(data);
      setRides([]);
      setRideDetails(data);
      router.replace("/ride");
    }
  }, [data]);

  return (
    <div className=" text-4xl  h-screen flex  temp">
      <div className="max-w-s mh-full  m-auto flex-col items-center bg-white  rounded-lg sm:border sm:border-primaryBorder shadow-default py-14 px-16">
        <h1 className="text-blackfont-medium text-primary  mb-5 text-center">
          Choose your Ride
        </h1>
        <div className="text-blackfont-medium text-sm  mb-5 text-center">
          Confirming selected ride in: {seconds} s
        </div>

        {rides.map(({ onDemandCab }, idx) => {
          return (
            <RideCard
              id={onDemandCab.id}
              dis={Math.floor(
                onDemandCab.quoteDetails.contents.distanceToNearestDriver / 0.96
              )}
              name={onDemandCab.agencyName}
              rating="5.0"
              price={onDemandCab.estimatedFare}
              timer={idx === 0 ? "5" : "40"}
              setId={setId}
            />
          );
        })}

        <div className="text-blackfont-medium text-sm  mb-5 text-center">
          💵Pay Driver using Cash/UPI
        </div>
      </div>
    </div>
  );
};

export default Choose;
