import Link from "next/link";
import Image from "next/image";
// import logo from "../components/Images/logoNN1.svg";

function Header() {
  return (
    <div className="flex items-center justify-between p-8 ">
      {/* <Image src={logo} alt="logo" /> */}
      <h1 className="font-extrabold text-lg">AI-Neural</h1>
      <div className="flex gap-4 pl-8">
        <Link href={"#"}>Demos</Link>
        <Link href={"#"}>Documentation</Link>
        <Link href={"#"}>Support</Link>
      </div>
      <button className=" bg-gradient-to-br  from-pink-500 to-purple-500 hover:bg-gradient-radial rounded-md p-8 py-3">
        Sign up
      </button>
    </div>
  );
}

export default Header;
