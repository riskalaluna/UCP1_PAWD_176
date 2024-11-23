const hospitalModel = require('../models/hospitaly');

module.exports = {
    // Mengambil semua data rumah sakit
    getAll: (callback) => {
        connection.query('SELECT * FROM datahospital', (err, results) => {
            callback(err, results);
        });
    },

    // Menambahkan data rumah sakit
    add: (hospital, callback) => {
        const { nama, alamat } = hospital;
        connection.query(
            'INSERT INTO datahospital (nama, alamat) VALUES (?, ?)',
            [nama, alamat],
            callback
        );
    },

    // Mengambil data rumah sakit berdasarkan ID
    getById: (id, callback) => {
        connection.query(
            'SELECT * FROM datahospital WHERE id = ?',
            [id],
            (err, results) => {
                if (results.length > 0) {
                    callback(err, results[0]);
                } else {
                    callback(err, null);
                }
            }
        );
    },

    // Memperbarui data rumah sakit berdasarkan ID
    update: (id, hospital, callback) => {
        const { nama, alamat } = hospital;
        connection.query(
            'UPDATE datahospital SET nama = ?, alamat = ? WHERE id = ?',
            [nama, alamat, id],
            callback
        );
    },

    // Menghapus data rumah sakit berdasarkan ID
    delete: (id, callback) => {
        connection.query(
            'DELETE FROM datahospital WHERE id = ?',
            [id],
            callback
        );
    },
};
