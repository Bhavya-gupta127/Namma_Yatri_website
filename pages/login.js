import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useStore from "@/lib/store";
import { useQuery } from "@tanstack/react-query";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [cc, setCc] = useState("+91");
  const token = useStore((state) => state.token);
  const router = useRouter();

  if (token) {
    router.push("/");
  }

  const getAuthID = async (countryCode, mobNum) => {
    const res = await fetch(`/api/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mobileCountryCode: countryCode,
        mobileNumber: mobNum,
        merchantId: "NAMMA_YATRI",
      }),
    }).then((res) => res.json());

    return res;
  };

  const { data, error, refetch } = useQuery(
    ["getAuthID", cc, phone],
    () => getAuthID(cc, phone),
    { enabled: false }
  );

  useEffect(() => {
    if (data?.errorPayload || data?.error) {
      if (data.error) {
        alert(data.error);
      } else {
        let er = "";
        data.errorPayload.forEach((d) => {
          er =
            er +
            " " +
            d.fieldName +
            " " +
            d.expectation +
            ". " +
            (d.errorMessage ? d.errorMessage : "") +
            "\n";
        });
        alert(er);
      }
    } else if (data?.authId) {
      router.push({
        pathname: "/otp",
        query: {
          authId: data.authId,
          num: phone,
        },
      });
    }
  }, [data]);

  if (error) {
    alert("Something went wrong");
  }

  function handleChange(event) {
    setPhone(event.target.value);
  }

  return (
    <div className=" text-4xl  h-screen flex  temp">
      <div className="max-w-s mh-full  m-auto flex-col items-center bg-white  rounded-lg sm:border sm:border-primaryBorder shadow-default py-40 px-16">
        <h1 className="text-blackfont-medium text-primary mt-4 mb-12 text-center">
          Enter Mobile number
        </h1>

        <form>
          <div className="w-full md:max-w-xs">
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
                onClick={(e) => {
                  e.preventDefault();
                  refetch();
                }}
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
