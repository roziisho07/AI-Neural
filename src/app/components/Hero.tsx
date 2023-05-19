import women from "./Images/anime.webp";
import women2 from "./Images/anime 2.webp";
import Card from "./Card";

function Hero() {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 h-[60vh] md:h-[100vh]">
      <div className="pl-8">
        <h1 className="text-6xl md:text-9xl font-bold">
          Get creative <br />
          With{" "}
          <span className="pl-4 pr-60  bg-blue-600 rounded-xl bg-gradient-to-r  from-pink-500 via-purple-500 to-gray-900 text-zinc-100 ">
            AI
          </span>
        </h1>
        <p className="lg:text-lg md:text-md py-4">
          REALIZE YOUR UNIQUE AI VISION
        </p>
        <button className="bg-gradient-to-br  from-pink-500 to-purple-500 hover:bg-gradient-radial rounded-md p-8 py-3">
          Get started
        </button>
      </div>
      <div className="hidden md:grid p-8  lg:grid-cols-2 gap-4 overflow-hidden">
        <Card url={women} alt={"Ai generated Anime"} />
        <Card url={women2} alt={"Ai generated Anime"} />
      </div>
    </div>
  );
}

export default Hero;
