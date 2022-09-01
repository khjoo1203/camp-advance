import styled from "styled-components";
import Item from "./Item";
import {  useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { __getMusic } from "../redux/module/musicSlice";

const List = () => {

  const musicList = useSelector(state=>state.musics.list) 
  const dispatch = useDispatch()
  const [ref, inView] = useInView()


  useEffect(()=>{
    if(musicList.length === 0){
      console.log('music lists on load')
      return
    }
  },[dispatch, musicList.length])

  useEffect(()=>{
    if(musicList.length !==0 && inView){
      console.log('inf scroll after the first Load')
      dispatch(__getMusic())
    }
  },[dispatch, inView, musicList.length])
  console.log(musicList)
  return (
    <ListDiv>
      {musicList.map((music)=>(
        <Item {...music} key={music.id}/>
      ))}
      <div ref={ref}/>
    </ListDiv>
  );
};
const ListDiv = styled.div`
  width: 800px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

export default List;
