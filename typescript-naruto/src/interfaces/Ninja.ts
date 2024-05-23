export type Ninja = {
  id?: number;
  nombre: string;
  avatar?: string;
  edad: number;
  aldea: string;
  clan: string;
  estado: string;
  habilidades: Array<string>;
  historia: string;
};

export type Ninjas = Ninja[];
