const sequelize = require('sequelize');
const db = require('../../config/mysql');

const mahasiswa = db.define(
    "mahasiswa",
    {
        nama: { type: sequelize.STRING },
        npm: { type: sequelize.STRING },
        kelas: { type: sequelize.STRING }
    },
    {
        freezeTableName: true
    }
);

mahasiswa.sync({});

module.exports = mahasiswa;