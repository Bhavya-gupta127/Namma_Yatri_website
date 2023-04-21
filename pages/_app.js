import "@/styles/globals.css";
// import Login from "@/pages/login";
// import Name from "@/pages/name";
// import Otp from "@/pages/otp";
import Navbar from "./navbar";
import Map from "../components/map"
import "mapbox-gl/dist/mapbox-gl.css"
import Login from "./login";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Map/>
      {/* <Login/>  */}
      <Component {...pageProps} />
    </>
  );
}
