const Sequelize = require('sequelize');
const db = require('../util/database');

const User = db.define('user_pet', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id: Sequelize.STRING,
    pet_id: Sequelize.STRING
});

module.exports = User;