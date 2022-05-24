import { data } from "./constant/data.js";
import news from "./model/news-schema.js";
const DefaultData= async ()=>{
  try{
    await news.insertMany(data);
    console.log("Data inserted successfully");
  }catch(error){
    console.log("Error", error.message);
  }
}

export default DefaultData;