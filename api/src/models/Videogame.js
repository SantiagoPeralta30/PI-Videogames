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
    plataforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    }
  },
  {
    timestamps: false,
  }
  );
};
