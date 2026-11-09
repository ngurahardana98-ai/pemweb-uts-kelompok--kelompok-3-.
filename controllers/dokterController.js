const Dokter = require('../models/dokterModel');

const dokterController = {
    index: async (req, res) => {
        try {
            const dataDokter = await Dokter.getAll();
            res.render('dokter/index', { dokter: dataDokter });
        } catch (err) {
            console.error(err);
            res.status(500).send('Kesalahan server');
        }
    },
    createForm: (req, res) => {
        res.render('dokter/create');
    },
    store: async (req, res) => {
        try {
            await Dokter.create(req.body);
            res.redirect('/dokter');
        } catch (err) {
            console.error(err);
            res.status(500).send('Gagal menambah data dokter');
        }
    },
    editForm: async (req, res) => {
        try {
            const dokter = await Dokter.getById(req.params.id);
            if (!dokter) return res.status(404).send('Data dokter tidak ditemukan');
            res.render('dokter/edit', { dokter });
        } catch (err) {
            console.error(err);
            res.status(500).send('Kesalahan server');
        }
    },
    update: async (req, res) => {
        try {
            await Dokter.update(req.params.id, req.body);
            res.redirect('/dokter');
        } catch (err) {
            console.error(err);
            res.status(500).send('Gagal memperbarui data dokter');
        }
    },
    delete: async (req, res) => {
        try {
            await Dokter.delete(req.params.id);
            res.redirect('/dokter');
        } catch (err) {
            console.error(err);
            res.status(500).send('Gagal menghapus data dokter');
        }
    }
};

module.exports = dokterController;