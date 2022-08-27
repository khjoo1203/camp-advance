import React from 'react';
import styled from "styled-components";

const CommentList = ({comments}) => {
  return (
    <CommentListBox>
      {comments.map((comment) => (
        <div key={comment.id}>
        <span>{comment.userName}</span>
        <p>{comment.content}</p>
      {comment.like?<CommentLike>♥️</CommentLike>:<CommentLike>♡</CommentLike>}
        <button>Del</button>
        </div>
      ))}
    </CommentListBox>
  );
};

export default CommentList;

const CommentListBox = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
`;

const CommentLike = styled.span`
  font-size: 30px;
  color: red;
`;