import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// import { addMusic } from "../redux/module/musicSlice"; //로컬
import { __createMusic } from "../redux/module/musicSlice";
import { nanoid } from "@reduxjs/toolkit";
import AllRounderButton from "./AllRounderButton";
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
          <InputBox length="300px" ref={artistInput} type="text" placeholder="Artist" />
          <InputBox length="300px" ref={titleInput} type="text" placeholder="Title" />
          <InputBox
            length="500px"
            ref={ImgUrlInput}
            type="text"
            placeholder="Cover URL"
          />
          <AllRounderButton
            onClick={(e) => {
              e.preventDefault();
              if (
                !artistInput.current.value ||
                !titleInput.current.value ||
                !ImgUrlInput.current.value
              )
                return;
              dispatch(
                __createMusic({
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
            buttonName={"Submit"}
          />
        </div>
      ) : null}
      {toggle ? (
        <AllRounderButton
          onClick={(e) => {
            e.preventDefault();
            setToggle(!toggle);
          }}
          buttonName={"Close"}
        />
      ) : (
        <AllRounderButton
          onClick={(e) => {
            e.preventDefault();
            setToggle(!toggle);
          }}
          buttonName={"Open Form"}
        />
      )}
    </Formed>
  );
};

export default Form;

const Formed = styled.form`
  max-width: 600px;
  margin: 20px auto;
`;

const InputBox = styled.input`
  margin: 30px;
  padding: 8px 10px;
  font-size: 20px;
  border: none;
  text-align: center;
  :focus {
    outline: none;
  }
  width: ${(props) => props.length};
  &::placeholder {
    color: #aaa;
  }
`;
