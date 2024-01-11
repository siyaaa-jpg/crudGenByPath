import { Sequelize, DataTypes } from "sequelize";

let commonDbName = `sample.db`

let StartFunc = ({ inDataToInsert }) => {
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: commonDbName, // You can specify the path for your SQLite database file
    });

    const Tickets = sequelize.define('sample', {
        // Define columns in the Customer table
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { freezeTableName: true }
    );

   // sequelize.sync({ force: true });
    console.log("Tickets : ", Tickets);
    return "";
};

export { StartFunc };
