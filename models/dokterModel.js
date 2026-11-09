const db = require('../config/database');

const Dokter = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM dokter ORDER BY id DESC');
        return rows;
    },
    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM dokter WHERE id = ?', [id]);
        return rows[0];
    },
    create: async (data) => {
        const query = 'INSERT INTO dokter (nama_dokter, spesialisasi, jadwal_praktik, no_telepon) VALUES (?, ?, ?, ?)';
        return await db.execute(query, [data.nama_dokter, data.spesialisasi, data.jadwal_praktik, data.no_telepon]);
    },
    update: async (id, data) => {
        const query = 'UPDATE dokter SET nama_dokter = ?, spesialisasi = ?, jadwal_praktik = ?, no_telepon = ? WHERE id = ?';
        return await db.execute(query, [data.nama_dokter, data.spesialisasi, data.jadwal_praktik, data.no_telepon, id]);
    },
    delete: async (id) => {
        return await db.execute('DELETE FROM dokter WHERE id = ?', [id]);
    }
};

module.exports = Dokter;