import mongoose from "mongoose";

const Connection = async (usename,password) => {
  const URL =`mongodb://${usename}:${password}@cluster0-shard-00-00.0d0nz.mongodb.net:27017,cluster0-shard-00-01.0d0nz.mongodb.net:27017,cluster0-shard-00-02.0d0nz.mongodb.net:27017/ashorts?ssl=true&replicaSet=atlas-vx4irj-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try{
   await mongoose.connect(URL,{useNewUrlParser:true});
   console.log("Database connected successfully");
  }catch(error){
    console.log("Error while connecting to db", error);
  }
}

export default Connection;