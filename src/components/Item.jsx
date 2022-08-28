import React, { useState} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleLike } from "../redux/module/musicSlice";

const Item = ({music}) => {
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()
  const {id, artist, title, like, coverUrl} = music
  return (
    <ItemDiv>
      {like?<Like onClick={()=>{
        dispatch(
          toggleLike(id, like)
        )
        setToggle(!toggle)
      }}>♥️</Like>:<Like onClick={()=>{
        dispatch(
          toggleLike(id, like)
        )
        setToggle(!toggle)
      }}>♡</Like>}
      <CoverImg onClick={()=>{
        navigate("/detail/"+id)
      }} src={coverUrl} />
      <Title>{title}</Title>
      <Artist>{artist}</Artist>
    </ItemDiv>
  );
};
const ItemDiv = styled.div`
  margin: 20px auto;
  width: 250px;
  height: 400px;
  box-shadow: 1px 1px 15px grey;
`;
const CoverImg = styled.img`
  width: 250px;
  height: 250px;
  margin: 20px auto 0;
`;
const Title = styled.h2`
font-size: 20px;
`;
const Artist = styled.h1`
font-size: 28px;
`;
const Like = styled.div`
  position: absolute;
  background-color: white;
  height: 30px;
  width: 30px;
  font-size: 24px;
  transform: translate(30%, 770%);
  border-radius: 50%;
  color: #fa1e2d;
  box-shadow: 3px 3px 10px black;
`;
export default Item;
