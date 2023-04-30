import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useStore from "@/lib/store";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  // const [phone, setPhone] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function handleChangeFrom(event) {
    // setPhone(event.target.value);
    setFrom(event.target.value);
  }

  function handleChangeTo(event) {
    // setPhone(event.target.value);
    setTo(event.target.value);
  }

  return (

   null

  );
};

export default Home;
