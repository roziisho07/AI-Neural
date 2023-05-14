import Image from "next/image";
import Anime20 from "./Images/ainme20.webp";
import aiImage from "./Images/AI-image.webp";

function Facts() {
  return (
    <div className="p-8 grid grid-cols-2 bg-[#0D1721]">
      <div className="py-6  ">
        <Image src={Anime20} alt="anime boy" width={600} className="" />
      </div>
      <div className="py-4">
        <h1 className="text-6xl  font-bold">
          Easy ways to use AI <br /> and tools to <br /> build AI.
        </h1>
        <p className="font-light">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          nulla eaque iste explicabo minima cum asperiores, voluptates quasi
          labore, porro esse ipsa dolorem hic, unde nisi debitis ea nobis vel!
        </p>
        <div className="pt-20">
          <Image src={aiImage} alt="anime boy" width={600} />
        </div>
      </div>
    </div>
  );
}

export default Facts;
