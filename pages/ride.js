import useStore from "@/lib/store";

const Ride = () => {
  const srcName = useStore(state => state.srcName);
  const dstName = useStore(state => state.dstName);
  const rideDetails = useStore(state => state.rideDetails);

  console.log(rideDetails);

  return (
    <div className=" text-4xl  h-screen flex  temp">
      <div className=" mh-full  m-auto flex-col items-center bg-white  rounded-lg sm:border sm:border-primaryBorder shadow-default py-40 px-16">
        <div className="flex flex-col">
          <div className="ontheway flex justify-between">
            <div className="text-2l m-2 p-2">{rideDetails.name} is on the way..</div>
            <img className="w-16 m-2 p-2" src="call.png" alt="call" srcset="" />
          </div>
          <br />
          <div className="otp m-2 p-2 bg-slate-100 justify-center text-center">
            OTP: {rideDetails.OTP}
          </div>
          <hr />
          <div className="details flex justify-between m-2 p-2">
            <div className="namecard">
              <img
                className="w-16"
                src="profile.png"
                alt="driverimg"
                srcset=""
              />
              <p>{rideDetails.name}</p>
              <p className="text-sm">12/2014</p>
              <p className="bg-slate-100 p-2 text-2xl">⭐5.0</p>
            </div>
            <div className="autocard">
              <img className="w-32" src="auto.png" alt="auto" srcset="" />
              <div className="numberplate bg-amber-300 p-1 border-solid border-4 border-gray-500 text-2xl">
                {rideDetails.number}
              </div>
            </div>
          </div>
          <hr />
          <div className="payment flex justify-between m-2 p-2  text-2xl">
            <div className="fare">
              <div className="text-sm">ride fare</div>
              Rs {rideDetails.estimatedFare}
            </div>
            <div className="method">
              <div className="text-sm ">Payment mode</div>
              💵Cash/Use any UPI app
            </div>
          </div>
          <hr />
          <div className="location m-2 p-2">
            <div className="text-sm">pickup and drop</div>

            <div className="pickup text-2xl">
              {srcName}
            </div>
            <span className="text-sm bg-slate-100 p-2">36.5 km</span>
            <div className="drop text-2xl mt-2">
              {dstName}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-6">
          {/* <Link href={{ pathname: "/choose" }}> */}
          <button
            // onClick={handleRequest}
            className={`w-full bg-black text-white font-medium bg-green py-2 px-4 text-xl rounded border border-green focus:outline-none focus:border-green-dark`}
          >
            Cancel Ride
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Ride;
