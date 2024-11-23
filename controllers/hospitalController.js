const hospitalModel = require('../models/hospital');  // Pastikan model yang benar digunakan

module.exports = {
    // Menampilkan semua data rumah sakit
    getAllHospitaly: (req, res) => {
        hospitalModel.getAll((err, hospitals) => {
            if (err) {
                return res.status(500).send('Error fetching data');
            }
            res.render('hospitaly/index', { hospitaly: hospitals });
        });
    },

    // Menambahkan data rumah sakit baru
    addHospital: (req, res) => {
        const { nama, alamat } = req.body; // Mengambil data dari form
        hospitalModel.add({ nama, alamat }, (err) => {
            if (err) {
                return res.status(500).send('Error adding data');
            }
            res.redirect('/hospitaly');
        });
    },

    // Menampilkan form untuk mengedit data rumah sakit
    editHospital: (req, res) => {
        const id = req.params.id;  // Mengambil ID dari URL
        hospitalModel.getById(id, (err, hospital) => {
            if (err) {
                return res.status(500).send('Error fetching hospital data');
            }
            if (!hospital) {
                return res.status(404).send('Hospital not found');
            }
            res.render('hospitaly/edit', { hospital });
        });
    },

    // Memperbarui data rumah sakit berdasarkan ID
    updateHospital: (req, res) => {
        const id = req.params.id;
        const { nama, alamat } = req.body; // Mengambil data dari form
        hospitalModel.update(id, { nama, alamat }, (err) => {
            if (err) {
                return res.status(500).send('Error updating data');
            }
            res.redirect('/hospitaly');
        });
    },

    // Menghapus data rumah sakit berdasarkan ID
    deleteHospital: (req, res) => {
        const id = req.params.id;  // Mengambil ID dari URL
        hospitalModel.delete(id, (err) => {
            if (err) {
                return res.status(500).send('Error deleting data');
            }
            res.redirect('/hospitaly');
        });
    },
};
