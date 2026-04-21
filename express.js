const Buku = require('../models/Buku');

async function getDataBuku() { //get all
  return await Buku.find();
}

async function getDataBukuById(id) { //get by id
  return await Buku.findById(id);
}

async function insertDataBuku(data) { //insert
  const buku = new Buku({
    judul: data.judul,
    penulis: data.penulis,
    tahun: data.tahun
  });

  const result = await buku.save();
  return result._id;
}

async function updateDataBuku(id, data) { //update
  const result = await Buku.updateOne(
    { _id: id },
    {
      $set: {
        judul: data.judul,
        penulis: data.penulis,
        tahun: data.tahun
      }
    }
  );

  return result.modifiedCount;
}

async function deleteDataBuku(id) { //delete
  const result = await Buku.deleteOne({ _id: id });
  return result.deletedCount;
}

async function cekBoqAlokasiProyek(proyek_id, boq_id) { //cek data
  const count = await ProyekBoqRekap.countDocuments({
    proyek_id: proyek_id,
    boq_id: boq_id
  });

  return count > 0;
}
