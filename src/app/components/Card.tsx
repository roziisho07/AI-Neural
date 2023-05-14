import Image from "next/image";

type Props = {
  url: any;
  alt: string;
};

function Card({ url, alt }: Props) {
  return (
    <div className="hover:cursor-pointer rounded-lg  ">
      <button className="bg-gradient-to-br absolute  from-blue-500 to-purple-500 hover:bg-gradient-radial rounded-lg opacity-50 p-2  hover:opacity-100">
        Preview
      </button>
      <Image src={url} alt={alt} width={250} height={250} />{" "}
    </div>
  );
}

export default Card;
