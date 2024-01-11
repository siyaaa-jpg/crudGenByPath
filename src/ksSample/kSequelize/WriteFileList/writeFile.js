import { Sequelize, DataTypes } from "sequelize";

let commonDbName = `sample.db`

let StartFunc = async () => {
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

    const users = await Tickets.findAll();

    const records = users.map(function (result) {
        return result.dataValues
    })

    // sequelize.sync({ force: true });
    console.log("users : ", records);
    return "";
};

export { StartFunc };
