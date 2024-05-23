import React from "react";
import Link from "next/link";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="fixed top-0  w-full h-16 mt-0 bg-black  z-50 py-3 ">
      <div className="flex justify-between  items-center text-2xl font-bold">
        <p className=" text-green-500 border-2 border-green-500  mx-1 rounded-md ">
          Naruto Shippuden
        </p>
        <Link href="/">
          <p className="text-green-500 border-2 border-green-500  mr-4  text-sm rounded-md  p-[2px]">
            Home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
