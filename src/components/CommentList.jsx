import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getComment } from "../redux/module/commentSlice";
import Comment from "./Comment";

const CommentList = ({id}) => {
  const dispatch = useDispatch();
  console.log(id)
  const getComment = useSelector((state) => state.comments.list.filter((list)=>list.musicId === id));
  console.log(getComment);
  
  // const getComment = list.find((comment)=>comment.musicId===id)
  useEffect(() => {
    dispatch(__getComment());
  }, [dispatch]);
  return (
    <>
        {getComment.map((comment)=>(
        <Comment {...comment} key={comment.id}/>
        ))}
    </>
  );
};

export default CommentList;

