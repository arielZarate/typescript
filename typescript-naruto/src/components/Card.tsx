/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Ninja } from "@/interfaces/Ninja";
import Image from "next/image";
type NinjaProps = {
  ninja: Ninja;
};

const NinjaCard: React.FC<NinjaProps> = ({ ninja }) => {
  return (
    <div className=" border-2 border-slate-200 rounded-lg h-92 w-64 shadow-md overflow-hidden hover:scale-105  hover:border-4 hover:border-slate-100 duration-200  hover:cursor-pointer">
      <h2 className="text-xl border-2 rounded-md py-2 text-center bg-sky-800">
        {ninja.nombre}
      </h2>
      <div className="mt-0 h-56 w-full border-b-sm relative ">
        <img
          src={ninja.avatar}
          alt={ninja.nombre}
          className="object-cover  h-full w-full "
        />
      </div>
      <div className="px-1 py-3">
        <div className="flex justify-between  flex-wrap py-1">
          <p className="text-sm">
            <strong className="text-blue-500">Aldea:</strong> {ninja.aldea}
          </p>

          <p className="text-sm">
            <strong className="text-green-600 ">Estado:</strong> {ninja.estado}
          </p>
        </div>

        <p className="text-sm mt-1">
          <strong className="text-slate-300">Clan:</strong> {ninja.clan}
        </p>

        <div className="text-center py-1 ">
          {/**
             le paso por parametro la ruta y el query
             */}
          <Link
            href={{
              pathname: `/shippuden/${ninja.id}`,
              query: { ninjas: JSON.stringify(ninja) },
            }}
          >
            <p className="text-[12px] text-slate-200 bg-pink-800 hover:bg-pink-600 rounded-lg font-bold p-1">
              ver detalle
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NinjaCard;
