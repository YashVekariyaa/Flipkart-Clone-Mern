import mongoose from "mongoose";

export const Connection = async (username,password) => {
    console.log("hello");
    const URL = `mongodb://${username}:${password}@ac-xfxguza-shard-00-00.un1gjg7.mongodb.net:27017,ac-xfxguza-shard-00-01.un1gjg7.mongodb.net:27017,ac-xfxguza-shard-00-02.un1gjg7.mongodb.net:27017/?ssl=true&replicaSet=atlas-9lyvlj-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected Successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;