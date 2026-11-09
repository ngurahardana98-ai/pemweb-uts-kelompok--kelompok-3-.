const express = require('express');
const app = express();
const methodOverride = require('method-override');
require('dotenv').config();


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));


const pasienRoutes = require('./routes/pasienRoutes');
app.use('/pasien', pasienRoutes);


const dokterRoutes = require('./routes/dokterRoutes');
app.use('/dokter', dokterRoutes);


const obatRoutes = require('./routes/obatRoutes');
app.use('/obat', obatRoutes);


const pendaftaranRoutes = require('./routes/pendaftaranRoutes');
app.use('/pendaftaran', pendaftaranRoutes);


const rekamMedisRoutes = require('./routes/rekamMedisRoutes');
app.use('/rekam-medis', rekamMedisRoutes);


app.get('/', (req, res) => {
    res.render('index');


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
}); 
