import Card from "./Card";
import women from "./Images/anime.webp";
import women2 from "./Images/anime 2.webp";
import anime3 from "./Images/anime3.webp";
import anime4 from "./Images/anime4.webp";
import anime5 from "./Images/anime6.webp";
import anime6 from "./Images/anime7.webp";
import anime7 from "./Images/anime8.webp";
import anime8 from "./Images/anime9.webp";
import anime9 from "./Images/anime10.webp";
import anime10 from "./Images/anime12.webp";
import anime11 from "./Images/anime13.webp";
import anime12 from "./Images/anime14.webp";
import anime15 from "./Images/anime15.webp";

function Recents() {
  return (
    <div className=" px-8  bg-[#0D1721]  ">
      <div className=" p-2 w-60  bg-gradient-to-r rounded-lg   from-purple-500 to-gray-900 ">
        <h1 className=" text-2xl ">Recent Creations</h1>
      </div>

      <div className=" grid grid-cols-5 pt-8  gap-1  ">
        <Card url={anime3} alt={"Ai generated Anime"} />
        <Card url={anime6} alt={"Ai generated Anime"} />
        <Card url={anime7} alt={"Ai generated Anime"} />
        <Card url={anime8} alt={"Ai generated Anime"} />
        <Card url={anime4} alt={"Ai generated Anime"} />
        <Card url={anime10} alt={"Ai generated Anime"} />
        <Card url={anime11} alt={"Ai generated Anime"} />
        <Card url={anime12} alt={"Ai generated Anime"} />
        <Card url={anime15} alt={"Ai generated Anime"} />
        <Card url={anime9} alt={"Ai generated Anime"} />
      </div>
      <div className="flex items-center justify-center ">
        <button className="bg-gradient-to-t  from-pink-500 to-purple-900 hover:bg-gradient-radial rounded-md p-8 py-3">
          Load more ▾
        </button>
      </div>
    </div>
  );
}

export default Recents;
