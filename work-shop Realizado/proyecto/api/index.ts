
import sequelize from './src/db/conecction';
import app from './app';

sequelize.authenticate()
.then(()=>console.log("prueba de conexion"))
.catch(e=>console.log("error ",e))
sequelize

    .sync({ force: false, logging: false })
    .then(() => {
        console.log('base de datos conectada! 😎');
        app.listen(3001, function () {
            console.log('App is listening on port 3001!');
        });
    })
    .catch((err) => console.error(err));

