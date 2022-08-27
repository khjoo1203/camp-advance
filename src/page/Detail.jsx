import React from "react";
import Info from "../components/Info";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  
  const { id } = useParams();
  console.log(id);
  const getMusic = useSelector((state) =>
    state.music.list.find((music) => music.id === id)
  ); //crud의 read 필요없음.
  console.log(getMusic);
  return (
    <div>
      <Info getMusic={getMusic} />
      <CommentList comments={getMusic.comments} />
      <CommentForm />
    </div>
  );
};

export default Detail;
