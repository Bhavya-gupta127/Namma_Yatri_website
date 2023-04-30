import { useEffect, useState } from "react";
import { withRouter, useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import useStore from "@/lib/store";

//ADD CODE TO VALIDATE THE OTP
const Otp = (props) => {
  const [OTP, setOTP] = useState("");
  const [phone, setPhone] = useState("");
  const [authId, setAuthID] = useState("");
  const [wh, setWH] = useState("OPT_OUT");
  const setToken = useStore((state) => state.setToken);
  const router = useRouter();

  // TODO: After token expire, if you enter the same name then there is some issues!!
  useEffect(() => {
    setPhone(props.router.query.num);
    setAuthID(props.router.query.authId);
  }, [props.router.query]);

  const verifyOTP = async (authId, otp, whatsappNotificationEnroll) => {
    const res = await fetch(`/api/otp/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authId,
        otp,
        whatsappNotificationEnroll,
      }),
    }).then((res) => res.json());

    return res;
  };

  const resendOTP = async (authId) => {
    const res = await fetch(`/api/resend/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authId,
      }),
    }).then((res) => res.json());

    return res;
  };

  const { data, error, refetch } = useQuery(
    ["verifyOTP", authId, OTP, wh],
    () => verifyOTP(authId, OTP, wh),
    { enabled: false }
  );

  const {
    data: data1,
    error: error1,
    refetch: refetch1,
  } = useQuery(["resendOTP", authId], () => resendOTP(authId), {
    enabled: false,
  });

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  useEffect(() => {
    if (error1) alert(error1);
  }, [error1]);

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
    } else if (data?.errorCode) {
      alert(
        data.errorCode + " " + (data?.errorMessage ? data?.errorMessage : "")
      );
    } else if (data?.token) {
      setToken(data.token);
      router.push("/name");
      // TODO: recheck where to set url
    }
  }, [data]);

  useEffect(() => {
    if (data1?.errorPayload || data1?.error) {
      if (data1.error) {
        alert(data1.error);
      } else {
        let er = "";
        data1.errorPayload.forEach((d) => {
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
    } else if (data1?.errorCode) {
      alert(
        data1.errorCode + " " + (data1?.errorMessage ? data1?.errorMessage : "")
      );
    }
  }, [data1]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (OTP.length != 4) {
      alert("Invalid OTP");
    } else {
      refetch();
    }
  };

  const hanldeResend = (e) => {
    e.preventDefault();
    refetch1();
  };

  function handleChange(event) {
    setOTP(event.target.value);
  }

  return (
    <div className=" text-4xl  h-screen flex temp">
      <div className="max-w-x mh-full  m-auto flex-col items-center bg-white rounded-lg sm:border sm:border-primaryBorder shadow-default py-40 px-16">
        <h1 className="text-blackfont-medium text-primary mt-4 mb-12 text-center">
          Enter OTP
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div className="w-full">
            <label htmlFor="number" className="text-sm">
              Login using the OTP sent to{" "}
              <span style={{ textDecoration: "bold" }}>+91 {phone}</span>
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
          {/* TODO: add a Resend Button and make its onClick as handleResend */}
          <a href="#">
            <span className="text-sm">Resend</span>
          </a>
          <br />
          <br />
          <div className="flex justify-center items-center mt-6">
            <button
              className={`w-full bg-black text-white font-medium bg-green py-2 px-4 text-xl rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Otp);
