import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

interface Connection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if(!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URI) return console.log("MONGODB_URI is not defined");

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: "imagefy",
        bufferCommands: false,
    });
    
    cached.conn = await cached.promise;
    return cached.conn;
}