import { useEffect, useState } from "react";
const RideCard = (props) => {
  const [seconds, setSeconds] = useState(props.timer);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <>
      <div className="w-screen max-w-xs">
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex flex-row ">
            <img
              class="w-10 h-10 m-3 rounded-full shadow-lg"
              src="auto.png"
              alt="Bonnie image"
            />
            <div class="flex flex-col m-3 pb-1">
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {props.dis} minute Away
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {props.name}
              </span>
              <hr class="mt-2" />
              <span class="text-sm mt-1 text-gray-500 dark:text-gray-400">
                ⭐{props.rating}
              </span>
            </div>
            <div>
              <h5 class="m-3 text-xl font-medium text-gray-900 dark:text-white">
                ₹ {props.price}
              </h5>
            </div>
          </div>
          <div class="flex m-2 space-x-3 md:mt-6">
            <button
              class={`inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white ${
                seconds > 0 ? "bg-blue-700" : "bg-gray-700"
              } rounded-lg`}

              onClick={() => {
                if (seconds > 0)
                  props.setId(props.id);
              }}
            >
              {seconds > 0 ? "Confirm Ride" : "Ride Exipred"}
            </button>
            <span class="px-4 py-2 text-sm font-medium text-white ">
              Expires in: {seconds} s
            </span>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default RideCard;
