db.produtos.updateMany(
  {},
  {
    $set: {
      criadoPor: "Ronald McDonald",
    },
  },
  { $upsert: true },
);

db.produtos.find(
  {},
  {
    _id: 0,
    nome: true,
    criadoPor: true,
  },
);
