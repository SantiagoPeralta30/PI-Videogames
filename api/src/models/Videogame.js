const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      defaultValue: 1.0,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Sin Descripción",
    },
    released: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
      allowNull: true,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    background_image:{
      type:DataTypes.STRING,
      allowNull:true,
      defaultValue:'https://icon2.cleanpng.com/20180131/bqq/kisspng-video-game-game-controller-joystick-online-game-vector-gamepad-5a7166f1860311.7443905015173813615489.jpg',
    },
    dbCreated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  },
  
  {
    timestamps: false,
  }
  );
};
