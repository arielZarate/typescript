"use client";

import List from "@/components/List";
import narutoJson from "../json/ninjas.json";
import { useEffect, useState } from "react";
import { Ninjas } from "@/interfaces/Ninja";

//const InitialState: Ninjas = narutoJson;
export default function Home() {
  const [dataJson, setDataJson] = useState<Ninjas>([] as Ninjas);

  useEffect(() => {
    return setDataJson(narutoJson);
  }, []);

  return (
    <div>
      <List ninjas={narutoJson} />
    </div>
  );
}
