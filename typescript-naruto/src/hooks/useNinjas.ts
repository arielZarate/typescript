import narutoJson from "../json/ninjas.json";
import { Ninjas, Ninja, TypesNinja, ActionNinja } from "@/interfaces/Ninja";

//============hooks====================================
import { useReducer, useEffect } from "react";
//================================================

//===================useReducer🤖🤖🤖🤖=============================

type InitialStateProps = {
  ninjas: Ninjas;
};

//creamos un estado inicial
const InitialState: InitialStateProps = {
  //ninjas: narutoJson as Ninjas,
  ninjas: [] as Ninjas,
};

export const NinjasReducer = (
  state: InitialStateProps,
  action: ActionNinja
) => {
  switch (action.type) {
    case TypesNinja.LIST_NINJA:
      return {
        ...state,
        ninjas: action.payload,
      };

    default:
      return state;
  }
};

//================================================

// Custom hook para manejar el estado de los ninjas
export const useNinjas = () => {
  const [state, dispatch] = useReducer(NinjasReducer, InitialState);

  useEffect(() => {
    // Cargar datos iniciales
    dispatch({ type: TypesNinja.LIST_NINJA, payload: narutoJson as Ninjas });
  }, []);

  return [state, dispatch] as const;
};
