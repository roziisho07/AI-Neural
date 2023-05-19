import Link from "next/link";

function Navbar() {
  return (
    <div className="visible md:hidden flex flex-col py-8   h-[100vh]  ">
      {/* <Image src={logo} alt="logo" /> */}

      <div className="flex flex-col gap-4 pb-4 text-xl  ">
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

export default Navbar;
