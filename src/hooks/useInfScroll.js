import axios from "axios";
import React, { useEffect, useState } from "react";

const useInfScroll = (query, pageNumber) => {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(true)
  const [musics, setMusics] = useState([])
  const [hasMore, setHasMore] = useState(false)
  useEffect(() => {
    setLoading(true)
    setError(false)
    
    axios({
      method: "GET",
      url: "http://localhost:3001/list",
      params: { q: query, page: pageNumber },
    }).then((res) => {
      setMusics(prevMusics=>{
        return [...new Set([...prevMusics, ...res.data.map(m => m.title)])]
      })
      setHasMore(res.data.length > 0)
      setLoading(false)
      console.log(res.data)
    }).catch(error=>{
      setError(true)
    })
  }, [query, pageNumber]);
  return {loading, error, musics, hasMore}
};

export default useInfScroll;
