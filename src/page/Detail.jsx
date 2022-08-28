import React from "react";
import Info from "../components/Info";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Detail = () => {
  
  const { id } = useParams();
  const getMusic = useSelector((state) =>
    state.music.list.find((music) => music.id === id)
  ); //crud의 read 필요없음.
  return (
    <DetailPage>
      <Header/>
      <DetailContent>
      <Info getMusic={getMusic} />
      </DetailContent>
      <DetailContent>
      <CommentList comments={getMusic.comments} />
      </DetailContent>
      <CommentForm />
    </DetailPage>
  );
};
const DetailPage = styled.div`
  max-width: 1000px;
  min-width: 800px;
  margin: auto;
`
const DetailContent = styled.div`
width: 450px;
margin: auto;
box-shadow: 5px 5px 10px #999;

`
export default Detail;
