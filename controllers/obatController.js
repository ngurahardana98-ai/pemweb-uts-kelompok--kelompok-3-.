const Obat = require('../models/obatModel');

const obatController = {
    index: async (req, res) => {
        try {
            const dataObat = await Obat.getAll();
            res.render('obat/index', { obat: dataObat });
        } catch (err) {
            console.error(err);
            res.status(500).send('Kesalahan server');
        }
    },
    createForm: (req, res) => {
        res.render('obat/create');
    },
    store: async (req, res) => {
        try {
            await Obat.create(req.body);
            res.redirect('/obat');
        } catch (err) {
            console.error(err);
            res.status(500).send('Gagal menambah obat');
        }
    },
    editForm: async (req, res) => {
        try {
            const obat = await Obat.getById(req.params.id);
            if (!obat) return res.status(404).send('Data obat tidak ditemukan');
            res.render('obat/edit', { obat });
        } catch (err) {
            console.error(err);
            res.status(500).send('Kesalahan server');
        }
    },
    update: async (req, res) => {
        try {
            await Obat.update(req.params.id, req.body);
            res.redirect('/obat');
        } catch (err) {
            console.error(err);
            res.status(500).send('Gagal memperbarui obat');
        }
    },
    delete: async (req, res) => {
        try {
            await Obat.delete(req.params.id);
            res.redirect('/obat');
        } catch (err) {
            console.error(err);
            res.status(500).send('Gagal menghapus obat');
        }
    }
};

module.exports = obatController;