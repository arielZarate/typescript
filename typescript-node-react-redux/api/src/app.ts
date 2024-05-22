import express, { Request, Response, NextFunction, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

//=========|config|================================
import config from "./libs/config";

const app: Application = express();
dotenv.config(); //config environment variables
app.locals.name = "Api with typescript";

app.set("port", config.port || 3000); //default port

//configurando las dependencies

app.use(express.urlencoded({ extended: true, limit: "50mb" })); //middleware
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

//app.use(cors()); //cors configurado de forma automatica

app.use(
  cors({
    origin: config.cors,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  })
);

//========interface================================

interface Error {
  status: number;
  message: string;
}

//========================================

//middleware para routes invalidas
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.log(err);
  res.status(status).json(message);
});

//==========|routes|==============
import indexRoutes from "./routes/index";

app.use("/api", indexRoutes);
//====================================
//por defecto
app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hola Typesccript" });
});

//====================================
export default app;
