const { mongoose, Schema } = require("mongoose");

const transactionSchema = new Schema({
    category: {
        type: String,
        enum: ["food", "shopping", "bills", "clothing"],
    },
    transactionTitle: String,
    amount: Number,
    createdAt: { type: Date, default: Date.now().toString() },
    note: String,
    transactionType: {
        type: String,
        enum: ["income", "expense"],
    },
});

const transactionModel = mongoose.model("transactions", transactionSchema);

module.exports = transactionModel;