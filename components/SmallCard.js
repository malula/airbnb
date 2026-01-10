import Image from "next/image";

export default function SmallCard({img, location,distance}) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out p-4 ">

      <div className="relative h-16 w-16">
        <Image
          src={img}
          alt="img"
            layout="fill"
             
          className="rounded-lg object-cover"
        />
      </div>
    <div className="mt-2">

      <h3 className="font-medium">{location}</h3>
      <p className="text-gray-500">{distance}</p>


    </div>
    </div>
  );
}