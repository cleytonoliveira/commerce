db.produtos.updateMany(
  {},
  { $set:
    { valorUnitario: NumberDecimal("0.00") },
  },
  { $upsert: true },
);

db.produtos.find(
  {},
  {
    _id: 0,
    nome: true,
    criadoPor: true,
    valorUnitario: true,
  },
);
