const db = require('../config/database');

const Obat = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM obat ORDER BY id DESC');
        return rows;
    },
    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM obat WHERE id = ?', [id]);
        return rows[0];
    },
    create: async (data) => {
        const query = 'INSERT INTO obat (nama_obat, kategori, stok, harga_satuan, tanggal_kedaluwarsa) VALUES (?, ?, ?, ?, ?)';
        return await db.execute(query, [data.nama_obat, data.kategori, data.stok, data.harga_satuan, data.tanggal_kedaluwarsa]);
    },
    update: async (id, data) => {
        const query = 'UPDATE obat SET nama_obat = ?, kategori = ?, stok = ?, harga_satuan = ?, tanggal_kedaluwarsa = ? WHERE id = ?';
        return await db.execute(query, [data.nama_obat, data.kategori, data.stok, data.harga_satuan, data.tanggal_kedaluwarsa, id]);
    },
    delete: async (id) => {
        return await db.execute('DELETE FROM obat WHERE id = ?', [id]);
    }
};

module.exports = Obat;