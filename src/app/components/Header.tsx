"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "./Navbar";
// import logo from "../components/Images/logoNN1.svg";

function Header() {
  const [visable, setVisable] = useState(false);

  const handleClick = () => {
    setVisable(!visable);
  };
  return (
    <div className=" bg-[#0D1721] p-8">
      <div className="hidden md:flex items-center justify-between  w-full ">
        {/* <Image src={logo} alt="logo" /> */}
        <h1 className="font-extrabold text-lg">AI-Neural</h1>
        <div className="flex gap-4 pl-8  ">
          <Link href={"#"}>Demos</Link>
          <Link href={"#"}>Documentation</Link>
          <Link href={"#"}>Support</Link>
        </div>
        <button className=" bg-gradient-to-br  from-pink-500 to-purple-500 hover:bg-gradient-radial rounded-md p-8 py-3">
          Sign up
        </button>
      </div>
      <button
        className="visible md:hidden bg-gradient-to-br  from-pink-500 to-purple-500 hover:bg-gradient-radial rounded-lg p-2 px-4 text-xl hover:animate-spin"
        onClick={handleClick}
      >
        ▽
      </button>
      {visable && <Navbar />}
    </div>
  );
}

export default Header;
