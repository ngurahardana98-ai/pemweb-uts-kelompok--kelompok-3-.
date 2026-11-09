const RekamMedis = require('../models/rekamMedisModel');
const Pendaftaran = require('../models/pendaftaranModel');

const rekamMedisController = {
    index: async (req, res) => {
        try {
            const dataRM = await RekamMedis.getAll();
            res.render('rekam_medis/index', { rekamMedis: dataRM });
        } catch (err) {
            console.error(err);
            res.status(500).send('Kesalahan server');
        }
    },
    createForm: async (req, res) => {
        try {
            const pendaftaran = await Pendaftaran.getAll();
            res.render('rekam_medis/create', { pendaftaran });
        } catch (err) {
            console.error(err);
            res.status(500).send('Kesalahan server');
        }
    },
    store: async (req, res) => {
        try {
            await RekamMedis.create(req.body);
            res.redirect('/rekam-medis');
        } catch (err) {
            console.error(err);
            res.status(500).send('Gagal menyimpan rekam medis');
        }
    },
    editForm: async (req, res) => {
        try {
            const rekamMedis = await RekamMedis.getById(req.params.id);
            const pendaftaran = await Pendaftaran.getAll();
            if (!rekamMedis) return res.status(404).send('Data tidak ditemukan');
            res.render('rekam_medis/edit', { rekamMedis, pendaftaran });
        } catch (err) {
            console.error(err);
            res.status(500).send('Kesalahan server');
        }
    },
    update: async (req, res) => {
        try {
            await RekamMedis.update(req.params.id, req.body);
            res.redirect('/rekam-medis');
        } catch (err) {
            console.error(err);
            res.status(500).send('Gagal memperbarui rekam medis');
        }
    },
    delete: async (req, res) => {
        try {
            await RekamMedis.delete(req.params.id);
            res.redirect('/rekam-medis');
        } catch (err) {
            console.error(err);
            res.status(500).send('Gagal menghapus rekam medis');
        }
    }
};

module.exports = rekamMedisController;