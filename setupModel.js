
const mongoose = require('mongoose');

const BukuSchema = new mongoose.Schema({
  judul: String,
  penulis: String,
  tahun: Number
});

module.exports = mongoose.model('Buku', BukuSchema);
