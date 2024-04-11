const { response } = require("express");
const transactionModel = require("../models/transactionModel");
    
const createTransaction = async (req, res) => {
    const data = req.body;
    try {
        const response = await transactionModel.create(data);
        console.log(response)
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error);
    };
}

const getTransaction = async (req, res) => {
    try {
        const response = await transactionModel.find({}).sort({createdAt:'desc'})
        res.status(200).send(response)
    } catch (error) {
        res.status(404).send(response)
    }

}

const deleteTransaction = async (req, res) => {
    const { id } = req.params;
    try {
        await transactionModel.findByIdAndDelete(id);
        res.status(200).send({ message: "Transaction deleted successfully." });
    } catch (error) {
        res.status(500).send(error);
    }
};

const editTransaction = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        await transactionModel.findByIdAndUpdate(id, data, { new: true });
        res.status(200).send({ message: "Transaction updated successfully." });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { getTransaction, createTransaction, deleteTransaction, editTransaction}


