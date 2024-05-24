"use client";

// ya no me hacen falta en este componente
//import narutoJson from "../json/ninjas.json";
//import { Ninjas, Ninja, TypesNinja, ActionNinja } from "@/interfaces/Ninja";
import List from "@/components/List";

//============hooks====================================
//import { useEffect, useState, useReducer } from "react"; //no hacen mas falta
import { useNinjas } from "@/hooks/useNinjas";
//================================================

export default function Home() {
  //========================1 era opcion con useState definido con tipos========================
  //const [dataJson, setDataJson] = useState<Ninjas>([] as Ninjas);

  //usando useReducer ya no necesito el state
  //separe la logica del state en un hook con el useReducer
  /*
  el dispatch aca no hace falta pero se lo deja como ejemplo porque se puede
usar para otras acciones como ADD_NINJA y hacer un post al backend (que no tengo jaja)
*/
  const [state, dispatch] = useNinjas();

  /*

  // ahora usamos el useReducer
  useEffect(() => {
   setDataJson(narutoJson)
  }, []);

*/
  //luego al Lits en vez de pasarle el narutoJson le paso el state.ninjas
  return (
    <div>
      <List ninjas={state.ninjas} />
    </div>
  );
}
