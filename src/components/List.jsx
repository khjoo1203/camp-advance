import styled from "styled-components";
import Item from "./Item";
import {  useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getItems } from "../api/api"; 

const List = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({
    threshold:0.8
  });

  const loadItems = useCallback(async () => {
    setLoading(true);
    await getItems(page, 3).then((res) => {
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
  const find = items.map(item=>
    item.map(item=>item.id))

  console.log(find)

  return (
    <ListDiv>
      {items.map(music=>
        music.map(music=>(
          <ItemDiv ref={ref}>
            <Item {...music} key={music.id} />
          </ItemDiv>
        ))
      )}
    </ListDiv>
  );
};
const ItemDiv = styled.div`
  background-color: white;
  margin: 20px auto;
  width: 250px;
  height: 400px;
  box-shadow: 1px 1px 15px grey;
`;
const ListDiv = styled.div`
  width: 800px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

export default List;
