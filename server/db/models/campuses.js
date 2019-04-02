const Sequelize = require('sequelize')
const db = require('../database')


const Campuses = db.define('campuses', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: true
    },
    address: {
        type: Sequelize.STRING,
        defaultValue: true
    },
    description: {
        type: Sequelize.TEXT
        
    }

})



module.exports =  Campuses