CREATE DATABASE db_klinik;
USE db_klinik;

CREATE TABLE pasien (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    nik VARCHAR(20) UNIQUE NOT NULL,
    tanggal_lahir DATE,
    jenis_kelamin ENUM('Laki-laki', 'Perempuan'),
    alamat TEXT,
    no_telepon VARCHAR(15)
);


CREATE TABLE dokter (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_dokter VARCHAR(100) NOT NULL,
    spesialisasi VARCHAR(50) NOT NULL,
    jadwal_praktik VARCHAR(100),
    no_telepon VARCHAR(15)
);


CREATE TABLE obat (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_obat VARCHAR(100) NOT NULL,
    kategori VARCHAR(50),
    stok INT NOT NULL,
    harga_satuan DECIMAL(10,2),
    tanggal_kedaluwarsa DATE
);


CREATE TABLE pendaftaran (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pasien_id INT,
    dokter_id INT,
    keluhan TEXT,
    tanggal_daftar DATE,
    status ENUM('Menunggu', 'Diperiksa', 'Selesai') DEFAULT 'Menunggu',
    FOREIGN KEY (pasien_id) REFERENCES pasien(id) ON DELETE CASCADE,
    FOREIGN KEY (dokter_id) REFERENCES dokter(id) ON DELETE CASCADE
);


CREATE TABLE rekam_medis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pendaftaran_id INT,
    diagnosa TEXT,
    tindakan TEXT,
    resep_obat TEXT,
    tanggal_pemeriksaan TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (pendaftaran_id) REFERENCES pendaftaran(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS obat;

CREATE TABLE obat (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_obat VARCHAR(100) NOT NULL,
    kategori VARCHAR(50) NOT NULL,
    stok INT NOT NULL,
    harga_satuan DECIMAL(10,2) NOT NULL,
    tanggal_kedaluwarsa DATE NOT NULL
);
