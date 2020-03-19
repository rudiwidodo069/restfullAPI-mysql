const router = require('express').Router();
const mahasiswa_model = require('../../model/mahasiswa');

router.get('/', async (req, res) => {
    try {
        const mahasisa = await mahasiswa_model.findAll({});
        res.send(mahasisa);
    } catch (err) {
        res.status(404).json({
            "status": 404,
            "message": "page not found"
        });
        res.status(500).json({
            "status": 500,
            "message": "internal server error"
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const { nama, npm, kelas } = req.body;
        const mahasiswa = await mahasiswa_model.create({
            nama, npm, kelas
        });
        res.send(mahasiswa);
    } catch (err) {
        res.status(404).json({
            "status": 404,
            "message": "page not found"
        });
        res.status(500).json({
            "status": 500,
            "message": "internal server error"
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const mhsID = req.params.id;
        const { nama, npm, kelas } = req.body;
        await mahasiswa_model.update({
            nama, npm, kelas
        }, {
            where: { id: mhsID }
        });
        const mahasiswa = await mahasiswa_model.findOne({ where: { id: mhsID } });
        res.json({
            "status": "OK",
            "message": "update success",
            "data": mahasiswa
        });
    } catch (err) {
        res.status(404).json({
            "status": 404,
            "message": "page not found"
        });
        res.status(500).json({
            "status": 500,
            "message": "internal server error"
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const mhsID = req.params.id;
        await mahasiswa_model.destroy({
            where: {
                id: mhsID
            }
        });
        res.json({
            "status": "OK",
            "message": "delete success",
            "data": []
        });
    } catch (err) {
        res.status(404).json({
            "status": 404,
            "message": "page not found"
        });
        res.status(500).json({
            "status": 500,
            "message": "internal server error"
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const mhsID = req.params.id;
        const mahasiswa = await mahasiswa_model.findOne({ where: { id: mhsID } });
        res.send(mahasiswa);
    } catch (err) {
        res.status(404).json({
            "status": 404,
            "message": "page not found"
        });
        res.status(500).json({
            "status": 500,
            "message": "internal server error"
        });
    }
});

module.exports = router;