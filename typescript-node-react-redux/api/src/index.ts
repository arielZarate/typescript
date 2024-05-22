import app from "./app";

import sequelize from "./libs/db";

const Connect = async () => {
  try {
    await sequelize.authenticate();

    app.listen(app.get("port"), () => {
      console.log(
        ` listening on port ${app.get(
          "port"
        )} && Connection has been established successfully.`
      );

      console.log(`used la uri ===>   http://localhost:${app.get("port")}`);
    });

    //esto sirve para setear la bd antes de iniciar
    sequelize.sync({ force: false });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

//ejecutamos la funcion
Connect();
