import { DataTypes } from "sequelize";

const dataColumns = {
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
};

export { dataColumns };