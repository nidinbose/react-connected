
    



import mongoose from "mongoose";


export default async function connection(){
    console.log("hiuhihi");
    console.log(process.env.DB_NAME);
    const URL=process.env.DB_URL+process.env.DB_NAME
    console.log(URL);
    const db=await mongoose.connect(URL)
    console.log("database connection");
    return db
}