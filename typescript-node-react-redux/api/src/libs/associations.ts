//ACA TENEMOS LAS ASOCIACIONES👌

//esta vacio pero estan losejemplo comentados como podria hacerse en sequelize 😀

/*

const Videogames = require("../models/Videogames-model.js");
const Genres = require("../models/Genres-model.js");


Videogames.belongsToMany(Genres, {
  through: "genre_videogame",
  // foreignKey: "genresId",
});

Genres.belongsToMany(Videogames, {
  through: "genre_videogame",
});

*/
//opcion2
/* const gameModel = require("../models/Videogames-model");

gameModel(sequelize); ==>> esto que le pasa por paramnetros es el sequelize del model

// el modelo esta asi

module.exposrts=(sequelize)=>{
  sequelize.define("User",{
    
  })
}
const {Videogames}=sequelize.models;
//despues hago las realciones
 */
