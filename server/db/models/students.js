const Sequelize = require('sequelize')
const db = require('../database')
const Campuses = require('./campuses')

const Students = db.define('students', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        isEmail: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: ""
    },
    gpa: {
        type: Sequelize.DECIMAL

    }
})



module.exports = Students