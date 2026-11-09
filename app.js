const express = require('express');
const app = express();
const methodOverride = require('method-override');
require('dotenv').config();

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// Impor dan Daftarkan Router Modul Pasien (Anggota 1)
const pasienRoutes = require('./routes/pasienRoutes');
app.use('/pasien', pasienRoutes);

// Impor dan Daftarkan Router Modul Dokter (Anggota 2)
const dokterRoutes = require('./routes/dokterRoutes');
app.use('/dokter', dokterRoutes);

// Impor dan Daftarkan Router Modul Obat (Anggota 3)
const obatRoutes = require('./routes/obatRoutes');
app.use('/obat', obatRoutes);

// Pastikan baris ini ada di app.js
const pendaftaranRoutes = require('./routes/pendaftaranRoutes');
app.use('/pendaftaran', pendaftaranRoutes);

// Pastikan baris ini ada di app.js
const rekamMedisRoutes = require('./routes/rekamMedisRoutes');
app.use('/rekam-medis', rekamMedisRoutes);
// Route Utama (Dashboard Klinik)

app.get('/', (req, res) => {
    res.render('index'); // Pastikan Anda juga membuat file views/index.ejs
});

// Menjalankan Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
}); 