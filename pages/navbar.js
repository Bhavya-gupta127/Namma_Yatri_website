import { useEffect, useState } from "react";
import useStore from "@/lib/store";
import Image from "next/image";
import { useRouter } from "next/router";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {/*logo container*/}
        {/* <a className="text-xl font-semibold" href="/"> */}
        <img src="/logo.png" alt="logo" />
        {/* </a> */}
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [token, setTok] = useState("Login");
  const tk = useStore((state) => state.token);
  const setToken = useStore((state) => state.setToken);
  // const setCurrURL = useStore((state) => state.setCurrURL);
  const router = useRouter();

  useEffect(() => {
    if (tk !== "") {
      setTok("Log out");
    } else {
      setTok("Login");
    }
  }, [tk]);

  const handlePress = (e) => {
    e.preventDefault();

    if (tk) {
      setToken(""); // removing token on logout
      // setCurrURL(""); // set current url to empty to restart login process
      router.push("/"); // move to home
    } else {
      router.push("/login");
    }
  };

  return (
    <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-15 items-center navbarStyle">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <a className="text-2xl font-semibold" href="/">
          {/* <img src="/../pics/logo.jpg" alt="logo" /> */}
          <Image
            src="/logo.jpg"
            alt="Picture of the author"
            width={150}
            height={100}
          />
        </a>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="text-3xl hidden md:flex">
          <button onClick={handlePress}>{token}</button>
          {/* <NavLink to="/login">LOGIN</NavLink> */}
          {/* <NavLink to="/about">ABOUT</NavLink> */}
        </div>
      </div>
    </nav>
  );
}
