const express = require('express');
const router = express.Router();
const hospitalController = require('../controllers/hospitalController'); // Menggunakan controller yang benar

// GET: Menampilkan daftar rumah sakit
router.get('/', hospitalController.getAllHospitaly);

// GET: Form untuk menambah rumah sakit baru
router.get('/new', (req, res) => {
    res.render('hospitaly/new');
});

// POST: Menambahkan rumah sakit baru
router.post('/', hospitalController.addHospital);

// GET: Form untuk mengedit data rumah sakit
router.get('/:id/edit', hospitalController.editHospital);

// PUT: Mengupdate data rumah sakit
router.put('/:id', hospitalController.updateHospital);

// DELETE: Menghapus data rumah sakit
router.delete('/:id', hospitalController.deleteHospital);

module.exports = router;
