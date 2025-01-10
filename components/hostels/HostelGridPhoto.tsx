import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function HostelGridPhoto({ images }: { images: string[] }) {
  if (images.length === 2) return <TwoPhoto images={images} />;
  if (images.length >= 3) return <TwoPhotoAndUpper images={images} />;
  return (
    <div className="max-h-[400px]">
      <Image
        src={images[0]}
        alt={"hostel"}
        width={300}
        height={200}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function TwoPhoto({ images }: { images: string[] }) {
  return (
    <div className="max-h-[400px] flex">
      <Image
        src={images[0]}
        alt={"hostel"}
        width={300}
        height={200}
        className="h-full w-1/2 object-cover"
      />
      <Image
        src={images[1]}
        alt={"hostel"}
        width={300}
        height={200}
        className="h-full w-1/2 object-cover"
      />
    </div>
  );
}

function TwoPhotoAndUpper({ images }: { images: string[] }) {
  return (
    <div className="max-h-[400px] flex flex-wrap">
      <Image
        src={images[0]}
        alt={"hostel"}
        width={300}
        height={300}
        className="h-full w-1/2 object-cover"
      />
      <div className="h-auto w-1/2 relative">
        <Image
          src={images[1]}
          alt={"hostel"}
          width={300}
          height={300}
          className="h-full w-full object-cover"
        />
        <div className=" absolute top-0 left-0 w-full h-full bg-[#33333389] grid place-items-center">
          <div className=" flex gap-1 items-center">
            <Plus size={25} color="#fff" />
            <span className=" text-xl font-semibold text-white">
              {images.length - 2}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
