export interface Ninja {
  id?: number;
  nombre: string;
  avatar?: string;
  edad: number;
  aldea: string;
  clan: string;
  estado: string;
  habilidades: Array<string>;
  historia: string;
}

export type Ninjas = Ninja[];

//==========para el useReducer defino los tipos============

export const TypesNinja = {
  ADD_NINJA: "ADD_NINJA",
  LIST_NINJA: "LIST_NINJA",
} as const;
/*El uso de as const en la definición de TypesNinja le indica a TypeScript que las 
propiedades del objeto son literales de cadena y no valores de cadena generales. 
Esto asegura que las propiedades ADD_NINJA y LIST_NINJA sean tratadas como tipos 
literales específicos, mejorando la precisión del tipado
 */

export type ActionNinja =
  | { type: typeof TypesNinja.ADD_NINJA; payload: Ninja }
  | { type: typeof TypesNinja.LIST_NINJA; payload: Ninjas };
