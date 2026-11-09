const db = require('../config/database');

const Pendaftaran = {
    getAll: async () => {
        const query = `
            SELECT pendaftaran.*, pasien.nama AS nama_pasien, dokter.nama_dokter 
            FROM pendaftaran 
            JOIN pasien ON pendaftaran.pasien_id = pasien.id 
            JOIN dokter ON pendaftaran.dokter_id = dokter.id 
            ORDER BY pendaftaran.id DESC
        `;
        const [rows] = await db.query(query);
        return rows;
    },
    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM pendaftaran WHERE id = ?', [id]);
        return rows[0];
    },
    create: async (data) => {
        const query = 'INSERT INTO pendaftaran (pasien_id, dokter_id, tanggal_daftar, keluhan, status) VALUES (?, ?, ?, ?, ?)';
        return await db.execute(query, [data.pasien_id, data.dokter_id, data.tanggal_daftar, data.keluhan, data.status]);
    },
    update: async (id, data) => {
        const query = 'UPDATE pendaftaran SET pasien_id = ?, dokter_id = ?, tanggal_daftar = ?, keluhan = ?, status = ? WHERE id = ?';
        return await db.execute(query, [data.pasien_id, data.dokter_id, data.tanggal_daftar, data.keluhan, data.status, id]);
    },
    delete: async (id) => {
        return await db.execute('DELETE FROM pendaftaran WHERE id = ?', [id]);
    }
};

module.exports = Pendaftaran;