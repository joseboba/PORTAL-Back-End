const { Sequelize } = require('sequelize');


const sequelize = new Sequelize({
    database: 'PORTAL',
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'admin'
})

const connectDB = async() => {

    try {
        
        await sequelize.sync({ alter: false });
        console.log('DB online');

    } catch (error) {
        console.log(error);
        return;
    }

}

module.exports = {
    connectDB,
    sequelize
};