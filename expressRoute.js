const express = require('express');
const router = express.Router();
const Buku = require('../models/Buku');

// GET ALL
router.get('/buku', async (req, res) => {
  const data = await Buku.find();
  res.json(data);
});

// GET BY ID
router.get('/buku/:id', async (req, res) => {
  const data = await Buku.findById(req.params.id);
  res.json(data);
});

// INSERT
router.post('/buku', async (req, res) => {
  const buku = new Buku(req.body);
  const result = await buku.save();
  res.json(result);
});

// UPDATE
router.put('/buku/:id', async (req, res) => {
  const result = await Buku.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.json(result);
});

// DELETE
router.delete('/buku/:id', async (req, res) => {
  const result = await Buku.deleteOne({ _id: req.params.id });
  res.json(result);
});

module.exports = router;
