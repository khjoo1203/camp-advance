import React from 'react';
import styled from 'styled-components';
const AllRounderButton = ({onClick, buttonName}) => {
  return <Button onClick={onClick}>{buttonName}</Button>
  
};
const Button = styled.button`
  margin: 5px auto;
  padding: 10px;
  background-color: transparent;
  width: 100px;
  height: 50px;
  font-size:20px;
  color: #764abc;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  transition: .5s;
  &:hover{
    background-color: #764abc;
    color: white;
  }
`;

export default AllRounderButton;