import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// import { addMusic } from "../redux/module/musicSlice"; //로컬
import { createMusic } from "../redux/module/musicSlice";
import { nanoid } from "@reduxjs/toolkit";
const Form = (props) => {
  const titleInput = useRef(null);
  const artistInput = useRef(null);
  const ImgUrlInput = useRef(null);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  return (
    <Formed>
      {toggle ? (
        <div>
          <InputBox ref={artistInput} type="text" placeholder="Artist" />
          <InputBox ref={titleInput} type="text" placeholder="title" />
          <InputBox
            length="500px"
            ref={ImgUrlInput}
            type="text"
            placeholder="title"
          />
          <Button
            onClick={(e) => {
              e.preventDefault();
              if (
                !artistInput.current.value ||
                !titleInput.current.value ||
                !ImgUrlInput.current.value
              )
                return;
              dispatch(
                createMusic({
                  id: nanoid(),
                  artist: artistInput.current.value,
                  title: titleInput.current.value,
                  coverUrl: ImgUrlInput.current.value,
                  like: false,
                  comments: [],
                })
              );
              setToggle(!toggle);
            }}
          >
            Submit
          </Button>
        </div>
      ) : null}
      {toggle?
      <ToggleButton
      onClick={(e) => {
        e.preventDefault();
        setToggle(!toggle);
      }}
      >
        Close
      </ToggleButton>
      :<ToggleButton
      onClick={(e) => {
        e.preventDefault();
        setToggle(!toggle);
      }}
      >
        Open Form
      </ToggleButton>}
    </Formed>
  );
};

export default Form;

const Formed = styled.form`
  max-width: 1200px;
  min-width: 800px;
  margin: 20px auto;
  
`;

const InputBox = styled.input`
  margin: 30px;
  padding: 8px 10px;
  font-size: 20px;
  border: none;
  border-bottom: 3px solid #764abc;
  :focus { outline: none; }
  width: ${(props) => props.length};
  &::placeholder {
    color: #aaa;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  width: 100px;
  height: 50px;
  font-size:20px;
  color: #764abc;
  border-radius: 5px;
  border: none;
  transition: .5s;
  &:hover{
    background-color: #764abc;
    color: white;
  }
`;

const ToggleButton = styled.button`
  margin: 20px;
  width: 100px;
  height: 50px;
  color: #fff;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background-color: #764abc;
  transition: .5s;
  border-radius: 5px;
  &:hover{
    background-color: transparent;
    color: #764abc;
  }
`;
