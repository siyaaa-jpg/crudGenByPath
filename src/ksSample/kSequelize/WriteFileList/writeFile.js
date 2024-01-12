import { Sequelize, DataTypes } from "sequelize";

import { ClassSample } from '../../ModalClass.js';

let commonDbName = `sample.db`

let StartFunc = async ({ inDataToInsert }) => {

    let localInDataToInsert = new ClassSample(inDataToInsert);

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

    const jane = Tickets.build(localInDataToInsert);

    // "jane" has not been saved to the database yet!
    // You can change any of its properties here, and call save() later to persist them all at once.

    await jane.save();



    // sequelize.sync({ force: true });
    // console.log("users : ", records);
    return await jane;
};

export { StartFunc };

// const db = require("./db")

// // Insert a new user into the 'users' table
// db.run(
//   "INSERT INTO users (name, email) VALUES (?, ?)",
//   ["John Doe", "john@example.com"],
//   function (err) {
//     if (err) {
//       console.error("Error inserting data:", err)
//     } else {
//       console.log(`New record added with ID: ${this.lastID}`)
//     }
//   }
// )