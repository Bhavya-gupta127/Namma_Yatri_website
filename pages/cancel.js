import { useRouter } from "next/router";

const Cancel = () => {
  const router = useRouter();

  const handleRequest = () => {
    router.replace("/home");
  };

  return (
    <div className=" text-4xl  h-screen flex  temp">
      <div className=" mh-full  m-auto flex-col items-center bg-white  rounded-lg sm:border sm:border-primaryBorder shadow-default py-40 px-16">
        <div className="flex flex-col">
          <div className="ontheway flex justify-center ">
            <div className="text-4xl m-2 p-2 text-center ">
              Ride Cancelled!! 😵‍💫
            </div>
          </div>
          <br />
          <div className="otp m-2 p-2 bg-slate-100 justify-center text-center">
            You have cancelled your ride.
          </div>
          <div className="flex flex-col justify-center">
            <div className=" m-2 p-2 justify-center text-center text-2xl">
              If you want to go out and enoy the weather, we are a tap away!
            </div>
            <div className="flex justify-center">
              <img className="w-32" src="auto.png" alt="auto" srcset="" />
            </div>
          </div>
          <hr />
        </div>

        <div className="flex justify-center items-center mt-6">
          <button
            onClick={handleRequest}
            className={`w-full bg-black text-white font-medium bg-green py-2 px-4 text-xl rounded border border-green focus:outline-none focus:border-green-dark`}
          >
            Book Another Ride
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
