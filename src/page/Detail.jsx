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
      <Info getMusic={getMusic} />
      <CommentList comments={getMusic.comments} />
      <CommentForm />
    </DetailPage>
  );
};
const DetailPage = styled.div`
  max-width: 1000px;
  min-width: 800px;
  margin: auto;
`

export default Detail;
