const express = require('express');
const db = require('./config/mysql');
const port = process.env.PORT || 8000;

const app = express();

db.authenticate()
    .then(() => console.log("koneksi database berhasil"))
    .catch(() => console.log("koneksi database gagal"));

app.use(express.json());

// router mahasiswa
const mahasiswa = require('./router/mahasiswa');
app.use('/mahasiswa', mahasiswa);

app.listen(port, () => {
    console.log(`server berjalan pada port http://localhost:${port}`);
});