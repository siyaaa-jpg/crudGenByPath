import { Sequelize, DataTypes } from "sequelize";

let StartFunc = async () => {
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: "data.db", // You can specify the path for your SQLite database file
    });

    const Customer = sequelize.define('sample', {
        // Define columns in the Customer table
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { freezeTableName: true }
    );

    let customers = await Customer.findAll()
    return customers.map(customer => {
        console.log('Database and tables created!', customer.toJSON());
        return customer.toJSON()
    });
};

StartFunc().then(promiseData => {
    console.log("bbbbbbbb : ", promiseData);
});