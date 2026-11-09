const db = require('../config/database');

const Pasien = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM pasien ORDER BY id DESC');
        return rows;
    },
    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM pasien WHERE id = ?', [id]);
        return rows[0];
    },
    create: async (data) => {
        const query = 'INSERT INTO pasien (nik, nama, jenis_kelamin, tanggal_lahir, alamat, no_telepon) VALUES (?, ?, ?, ?, ?, ?)';
        return await db.execute(query, [data.nik, data.nama, data.jenis_kelamin, data.tanggal_lahir, data.alamat, data.no_telepon]);
    },
    update: async (id, data) => {
        const query = 'UPDATE pasien SET nik = ?, nama = ?, jenis_kelamin = ?, tanggal_lahir = ?, alamat = ?, no_telepon = ? WHERE id = ?';
        return await db.execute(query, [data.nik, data.nama, data.jenis_kelamin, data.tanggal_lahir, data.alamat, data.no_telepon, id]);
    },
    delete: async (id) => {
        return await db.execute('DELETE FROM pasien WHERE id = ?', [id]);
    }
};

module.exports = Pasien;