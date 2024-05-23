# Proyecto Naruto con Typescript

Este es un proyecto poniendo en practica typescript ,se ha creado un json donde se consume la informacion para listar y mostrar el detalle

- Esta creado con`nextjs` , `typescript` , `taildwindcss`

![fachada](./src/assets//images/fachada1.png)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## React

Tenemos la folder components donde tenemos la siguente estructura

```bash
├── client/ # Carpeta para el frontend
│   ├── public/ # Archivos públicos como el index.html
│   ├── src/ # Código fuente del frontend
│   │   ├── components/ # Componentes de React
│   │   │   ├── Card.tsx # Componente Card
│   │   │   ├── List.tsx # Componente List
│   │   │   └── NavBar.tsx # Componente NavBar
│   │   ├── interfaces/ # Interfaces TypeScript
│   │   │   └── Ninja.ts # Definición de la interfaz Ninja
│   │   ├── json/ # Archivos JSON de datos
│   │   │   └── ninjas.json # Datos de ninjas
│   │   ├── App.tsx # Componente principal de React
│   │   └── index.tsx # Punto de entrada de la aplicación React
│   ├── package.json # Dependencias del frontend
│   └── ...
│
├── .gitignore # Archivos y carpetas ignorados por Git
└── README.md # Documentación del proyecto

```

Se creo una sola ruta mas en src/app/shippuden/[id] para mostrar el ninjaDetail

### Interfaces

Se maneja los tipos de los campos

```javascript
export type Ninja = {
  id?: number,
  nombre: string,
  avatar?: string,
  edad: number,
  aldea: string,
  clan: string,
  estado: string,
  habilidades: Array<string>,
  historia: string,
};

export type Ninjas = Ninja[];
```

## Deploy on Vercel

- usare Vercel
