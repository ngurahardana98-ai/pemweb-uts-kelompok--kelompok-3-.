const Pasien = require('../models/pasienModel');

const pasienController = {
    index: async (req, res) => {
        try {
            const dataPasien = await Pasien.getAll();
            res.render('pasien/index', { pasien: dataPasien });
        } catch (err) {
            console.error(err);
            res.status(500).send('Terjadi kesalahan pada server');
        }
    },
    createForm: (req, res) => {
        res.render('pasien/create');
    },
    store: async (req, res) => {
        try {
            await Pasien.create(req.body);
            res.redirect('/pasien');
        } catch (err) {
            console.error(err);
            res.status(500).send('Gagal menambah data');
        }
    },
    editForm: async (req, res) => {
        try {
            const pasien = await Pasien.getById(req.params.id);
            if (!pasien) return res.status(404).send('Data pasien tidak ditemukan');
            res.render('pasien/edit', { pasien });
        } catch (err) {
            console.error(err);
            res.status(500).send('Kesalahan server');
        }
    },
    update: async (req, res) => {
        try {
            await Pasien.update(req.params.id, req.body);
            res.redirect('/pasien');
        } catch (err) {
            console.error(err);
            res.status(500).send('Gagal memperbarui data');
        }
    },
    delete: async (req, res) => {
        try {
            await Pasien.delete(req.params.id);
            res.redirect('/pasien');
        } catch (err) {
            console.error(err);
            res.status(500).send('Gagal menghapus data');
        }
    }
};

module.exports = pasienController;