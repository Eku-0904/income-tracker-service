const { Router } = require("express");
const { getTransaction, createTransaction, deleteTransaction, editTransaction } = require("../controller/transactionController");

const transactionRoute = Router();

transactionRoute.get("/get-transaction", getTransaction);
transactionRoute.post("/create-transaction", createTransaction);
transactionRoute.delete("/delete-transaction/:id", deleteTransaction);
transactionRoute.put("/edit-transaction/:id", editTransaction);

module.exports = { transactionRoute };
