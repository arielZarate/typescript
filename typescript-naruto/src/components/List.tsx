"use client";

import React, { useEffect, useState } from "react";
import { Ninja, Ninjas } from "@/interfaces/Ninja";
import Card from "./Card";

type NinjasProps = {
  ninjas: Ninjas;
};

const List: React.FC<NinjasProps> = ({ ninjas }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (ninjas.length > 0) {
        setLoading(false);
      }
    }, 400);
  }, [ninjas]);

  return (
    <>
      <div className="flex flex-col justify-center mt-8 py-4">
        {loading ? (
          <div className="font-bold text-xl flex place-content-center text-indigo-300 mt-4 my-3">
            Cargando aldea de la hoja....
          </div>
        ) : (
          //flex justify-center items-center flex-wrap mt-8 py-3 gap-3
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-8 my-8">
              {ninjas &&
                ninjas.map((ninja) => {
                  return <Card key={ninja.id} ninja={ninja} />;
                })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default List;
