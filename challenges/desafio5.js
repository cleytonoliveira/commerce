db.produtos.updateMany(
  { nome:
    { $ne: "McChicken" },
  },
  { $addToSet:
    { ingredientes: "ketchup" },
  },
);

db.produtos.find(
  {},
  {
    _id: 0,
    nome: true,
    ingredientes: true,
  },
);
