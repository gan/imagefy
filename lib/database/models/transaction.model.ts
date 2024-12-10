import { model, Document, models, Schema } from "mongoose"

export interface ITransaction extends Document {
    userId: string;
    amount: number;
    status: string;
    createdAt: Date;
}

const TransactionSchema = new Schema({
    stripeId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
    plan: { type: String },
    credits: { type: Number },
    buyer: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
})

const Transaction = models?.Transaction || model("Transaction", TransactionSchema);

export default Transaction;