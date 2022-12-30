import { DataTypes, Model } from "sequelize";
import { sequelize } from "../DbConnection/dbConn";

class appointment extends Model {
  Id: any;
}

appointment.init(
  {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "Id" 
      },
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Current_Time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Start_Time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    End_Time: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    createdAt: "Created Time",
    updatedAt: "Updated Time",
    timestamps: false,
    sequelize: sequelize,
    modelName: "appointments",
  }
);

export default appointment;