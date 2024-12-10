import { model, Document, models, Schema } from "mongoose"
import { IImage } from "./imges.model";
import { ITransaction } from "./transaction.model";

export interface IUser extends Document {
    clerkId: string;
    email: string;
    avatar: string;
    username: string;
    firstName: string;
    lastName: string;
    planId: number;
    creditBalance: number;
    images: IImage[];
    transactions: ITransaction[];
}

const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    firstName: { type: String},
    lastName: { type: String},
    planId: { type: Number, default: 1 },
    creditBalance: { type: Number, default: 10 },
    images: [{ type: Schema.Types.ObjectId, ref: "Image" }],
    transactions: [{ type: Schema.Types.ObjectId, ref: "Transaction" }],
})

const User = models?.User || model("User", UserSchema);

export default User;