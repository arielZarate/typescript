/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { Ninja, Ninjas } from "@/interfaces/Ninja";

const NinjaDetail = () => {
  //obtengo el query
  const [ninja, setNinja] = useState<Ninja | null>(null);
  const { id } = useParams();
  const searchParams = useSearchParams();

  useEffect(() => {
    let ninjaData = searchParams.get("ninjas");
    if (ninjaData) {
      //parseo
      setNinja(JSON.parse(ninjaData));
    }
  }, [searchParams]);

  console.log(JSON.stringify(id));
  console.log(JSON.stringify(ninja));
  if (!ninja) {
    return <div className="mt-48 text-white font-bold ">Loading...</div>;
  }

  return (
    <div className=" my-20 py-10 ml-10 text-white  hover:cursor-pointer">
      <div className="grid grid-cols-2 gap-1 border-4 border-slate-500 h-[full] w-4/6 rounded-md">
        <div className="">
          <h1 className="font-bold text-3xl text-center py-3 text-slate-300 rounded-sm border-4 border-slate-200 hover:text-green-500 duration-300">
            {ninja.nombre}
          </h1>
          <div className="min-w-full h-full ">
            <img
              src={ninja.avatar}
              alt={ninja.nombre}
              className="object-cover  w-full h-[470px] rounded-sm   duration-200"
            />
          </div>
        </div>
        <div className="flex flex-col py-5 gap-2">
          <div className="flex justify-between ">
            <p className="text-sm">
              <strong className="mr-1">Aldea:</strong>
              <span className="hover:text-orange-500"> {ninja.aldea}</span>
            </p>
            <p className="mr-2 text-sm">
              <strong>Clan:</strong>
              <span className="hover:text-orange-500"> {ninja.clan}</span>
            </p>
          </div>
          <p className="text-sm">
            <strong className="text-green-400 mr-1">Estado:</strong>
            <span className="hover:text-green-500"> {ninja.estado}</span>
          </p>
          <p className="text-sm">
            <strong className="mr-1">Edad:</strong>

            <span className="hover:text-orange-500"> {ninja.edad}</span>
          </p>

          <ul className="border-2 border-slate-400 w-full rounded-md p-2">
            <strong className="mr-1 p-1 text-blue-700 ">Habilidades:</strong>
            <div className="">
              {ninja.habilidades.map((e) => {
                return (
                  <li
                    key={e}
                    className="text-sm font-light hover:text-orange-500"
                  >
                    {e}
                  </li>
                );
              })}
            </div>
          </ul>

          <div>
            <strong className="text-blue-700">Descripcion</strong>
            <div className="text-sm font-light flex flex-wrap">
              {ninja.historia.split(" ").map((word, index) => {
                return (
                  <span key={index} className="hover:text-orange-500 mr-1">
                    {word}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NinjaDetail;
