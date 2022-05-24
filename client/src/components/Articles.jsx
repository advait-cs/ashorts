//55.00
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getNews } from "../services/api";
import Article from "./Article";

const Articles=()=>{
  const [news,setNews]=useState([]);
  useEffect(()=>{
    dailyNews();
  },[]);

  const dailyNews= async ()=>{
    let response= await getNews();
    console.log(response.data);

    setNews(response.data);
  }
  return (
    <Box>
       {news.map((data)=>{
         return(
          <Article data={data}/>
         )  
       })}
    </Box>
  );
}

export default Articles;