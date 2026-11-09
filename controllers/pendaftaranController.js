const Pendaftaran = require('../models/pendaftaranModel');
const Pasien = require('../models/pasienModel');
const Dokter = require('../models/dokterModel');

const pendaftaranController = {
    index: async (req, res) => {
        try {
            const dataPendaftaran = await Pendaftaran.getAll();
            res.render('pendaftaran/index', { pendaftaran: dataPendaftaran });
        } catch (err) {
            console.error(err);
            res.status(500).send('Kesalahan server');
        }
    },
    createForm: async (req, res) => {
        try {
            const pasien = await Pasien.getAll();
            const dokter = await Dokter.getAll();
            res.render('pendaftaran/create', { pasien, dokter });
        } catch (err) {
            console.error(err);
            res.status(500).send('Kesalahan server');
        }
    },
    store: async (req, res) => {
        try {
            await Pendaftaran.create(req.body);
            res.redirect('/pendaftaran');
        } catch (err) {
            console.error(err);
            res.status(500).send('Gagal menyimpan pendaftaran');
        }
    },
    editForm: async (req, res) => {
        try {
            const pendaftaran = await Pendaftaran.getById(req.params.id);
            const pasien = await Pasien.getAll();
            const dokter = await Dokter.getAll();
            if (!pendaftaran) return res.status(404).send('Data tidak ditemukan');
            res.render('pendaftaran/edit', { pendaftaran, pasien, dokter });
        } catch (err) {
            console.error(err);
            res.status(500).send('Kesalahan server');
        }
    },
    update: async (req, res) => {
        try {
            await Pendaftaran.update(req.params.id, req.body);
            res.redirect('/pendaftaran');
        } catch (err) {
            console.error(err);
            res.status(500).send('Gagal memperbarui pendaftaran');
        }
    },
    delete: async (req, res) => {
        try {
            await Pendaftaran.delete(req.params.id);
            res.redirect('/pendaftaran');
        } catch (err) {
            console.error(err);
            res.status(500).send('Gagal menghapus pendaftaran');
        }
    }
};

module.exports = pendaftaranController;