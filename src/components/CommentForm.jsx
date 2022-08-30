import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { __postComment } from "../redux/module/musicSlice";
import AllRounderButton from "./AllRounderButton";

const CommentForm = () => {
  const {id} = useParams()
  const dispatch = useDispatch()

  const [userName, onChangeUserNameHandler] = useInput()
  const [content, onChangeContentHandler] = useInput()
  
  const commentHandler = () => {
    const postComment = {
      id,
      commentId: nanoid(),
      username: userName,
      content: content,
      commentLike: false
    }
    dispatch(__postComment(postComment))
    console.log(postComment)
  }
  return (
    <CommentFormBox>
      <div>
        <CommentFormInput length="200px" type="text" placeholder="Username" value={userName} onChange={onChangeUserNameHandler}/>
        <CommentFormInput length="400px" type="text" placeholder="comment" value={content} onChange={onChangeContentHandler}/>
      </div>
      <AllRounderButton buttonName={"Submit"} onClick={commentHandler}/>
    </CommentFormBox>
  );
};

export default CommentForm;
const CommentFormBox = styled.div`
  width: 450px;
  margin: 20px auto;
  box-shadow: 5px 5px 20px #999;
`;

const CommentFormInput = styled.input`
  margin: 15px;
  width: ${(props) => props.length};
  font-size: 18px;
  border: none;
  text-align: center;
  :focus {
    outline: none;
  }
  &::placeholder {
    color: #aaa;
  }
`;