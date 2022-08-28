import React from "react";
import styled from "styled-components";

const CommentForm = () => {
  return (
    <CommentFormBox>
      <div>
        <CommentFormInput length="150px" type="text" placeholder="Username" />
        <CommentFormInput length="280px" type="text" placeholder="comment" />
      </div>
      <SubmitButton>Submit</SubmitButton>
    </CommentFormBox>
  );
};

export default CommentForm;
const CommentFormBox = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
  box-shadow: 5px 5px 10px grey;
`;

const CommentFormInput = styled.input`
  margin: 15px;
  width: ${(props) => props.length};
  font-size: 18px;
  border: none;
  :focus { outline: none; }
  &::placeholder {
    color: #aaa;
  }
`;
const SubmitButton = styled.button`
  background-color: transparent;
  font-size: 20px;
  color: #764abc;
  border-radius: 5px;
  height: 35px;
  border: none;
  transition:.5s;
  &:hover{
    background-color: #764abc;
    color: white;
  }
`;
