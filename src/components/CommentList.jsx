import React from "react";
import styled from "styled-components";

const CommentList = ({ comments }) => {
  return (
    <>
      {comments?.map((comment) => (
        <CommentListBox key={comment.id}>
          <span>{comment.userName}</span>
          <p>{comment.content}</p>
          {comment.like ? (
            <CommentLike>♥️</CommentLike>
          ) : (
            <CommentLike>♡</CommentLike>
          )}
          <DelButton>Del</DelButton>
        </CommentListBox>
      ))}
    </>
  );
};

export default CommentList;

const CommentListBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
`;

const CommentLike = styled.span`
  font-size: 20px;
  color: #fa1e2d;
`;

const DelButton = styled.button`
  padding: 10px;
  background-color: transparent;
  font-size: 15px;
  color: #764abc;
  border-radius: 20px;
  border: none;
  &:hover {
    color: black;
  }
`;
