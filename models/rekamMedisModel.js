const db = require('../config/database');

const RekamMedis = {
    getAll: async () => {
        const query = `
            SELECT rekam_medis.*, pasien.nama AS nama_pasien, dokter.nama_dokter, pendaftaran.tanggal_daftar 
            FROM rekam_medis 
            JOIN pendaftaran ON rekam_medis.pendaftaran_id = pendaftaran.id 
            JOIN pasien ON pendaftaran.pasien_id = pasien.id 
            JOIN dokter ON pendaftaran.dokter_id = dokter.id 
            ORDER BY rekam_medis.id DESC
        `;
        const [rows] = await db.query(query);
        return rows;
    },
    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM rekam_medis WHERE id = ?', [id]);
        return rows[0];
    },
    create: async (data) => {
        const query = 'INSERT INTO rekam_medis (pendaftaran_id, diagnosa, tindakan, resep_obat) VALUES (?, ?, ?, ?)';
        return await db.execute(query, [data.pendaftaran_id, data.diagnosa, data.tindakan, data.resep_obat]);
    },
    update: async (id, data) => {
        const query = 'UPDATE rekam_medis SET pendaftaran_id = ?, diagnosa = ?, tindakan = ?, resep_obat = ? WHERE id = ?';
        return await db.execute(query, [data.pendaftaran_id, data.diagnosa, data.tindakan, data.resep_obat, id]);
    },
    delete: async (id) => {
        return await db.execute('DELETE FROM rekam_medis WHERE id = ?', [id]);
    }
};

module.exports = RekamMedis;