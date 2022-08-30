import React from 'react';
import styled from 'styled-components';
import AllRounderButton from './AllRounderButton';
const Comment = ({username, content, commentLike}) => {
  return (
    <CommentListBox>
      <Paragraph length="100px">{username}</Paragraph>
        <Paragraph length="240px">{content}</Paragraph>
        {commentLike?<CommentLike>♥️</CommentLike>:<CommentLike>♡</CommentLike>}
        <AllRounderButton length={"60px"} buttonName={"edit"} />
        <AllRounderButton length={"60px"} buttonName={"delete"} />
    </CommentListBox>
  );
};

export default Comment

const CommentLike = styled.span`
  font-size: 20px;
  color: #fa1e2d;
`;
const Paragraph = styled.p`
  display: inline-block;
  word-wrap: break-word;
  width: ${(props) => props.length};
`;
const CommentListBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
`;
