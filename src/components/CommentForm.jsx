import React from "react";
import styled from "styled-components";

const CommentForm = () => {
  return (
    <CommentFormBox>
      <div>
        <CommentFormInput type="text" placeholder="Username" />
        <CommentFormInput type="text" placeholder="comment" />
      </div>
      <SubmitButton>Submit</SubmitButton>
    </CommentFormBox>
  );
};

export default CommentForm;
const CommentFormBox = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
  box-shadow: 5px 5px 10px grey;
`;

const CommentFormInput = styled.input`
  margin: 15px;
  font-size: 18px;
  border: none;
  &::placeholder {
    color: #aaa;
  }
`;
const SubmitButton = styled.button`
  background-color: transparent;
  font-size: 20px;
  color: #764abc;
  border-radius: 20px;
  border: none;
  &:hover {
    color: black;
  }
`;
