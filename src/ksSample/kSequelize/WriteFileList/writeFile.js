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

    const LocalFromBuild = Tickets.build(localInDataToInsert);

    let localNewAfterSave = await LocalFromBuild.save();

    return await localNewAfterSave.id;
};

export { StartFunc };

