import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getItems } from "../api/api";

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  const loadItems = useCallback(async () => {
    setLoading(true);
    await getItems(page, 6).then((res) => {
      setItems((prevState) => [...prevState, res]);
    });
    setLoading(false);
  }, [page]);

  console.log(items);

  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    loadItems();
  }, [loadItems]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);
  // try{
  //   const temp = await getItems(page,6)
  //   const tempItems = items.concat(temp)
  //   setItems(tempItems)
  //   console.log(temp)
  // }catch(e){
  //   console.error(e)
  // }

  return (
    <div>
      {items.map((item,idx)=> (
        <React.Fragment key={idx}>
          {item.map(item=>(
            <div key={item.id} ref={ref}>
            {item.title}
            {item.artist}
            <img src={item.coverUrl} alt="img" style={{"height":"200px"}} />
          </div>
          ))}
          {/* {items.length -1 ===idx ? (
            
          ):(
            <div>
              {item.title}
              {item.artist}
              <img src={item.coverUrl} alt="img" />
            </div>
          )
        } */}
        </React.Fragment>
      ))}
    </div>
  );
};

const Item = () => {
  return (
    <>
    
    </>
  )
}

export default InfiniteScroll;
