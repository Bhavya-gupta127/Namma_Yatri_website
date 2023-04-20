import "@/styles/globals.css";
// import Login from "@/pages/login";
// import Name from "@/pages/name";
// import Otp from "@/pages/otp";
import Navbar from "./navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
