import { DataTypes } from "sequelize";

const dataColumns = {
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Mobile: {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 316
    }
};

export { dataColumns };