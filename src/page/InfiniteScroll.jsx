import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getItems } from "../api/api";

const InfiniteScroll = () => {
  const [items , setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();

  const loadItems = async (page) => {
    try{
      const temp = await getItems(page,6)
      const tempItems = items.concat(temp)
      setItems(tempItems)
      console.log(temp)
    }catch(e){
      console.error(e)
    }
  }

  useEffect(()=>{
    loadItems(page)
  },[page])


  return 
}

export default InfiniteScroll;
