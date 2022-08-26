import React from "react";
import styled from "styled-components";

const FormInfo = () => {

    return (
        <InputBox type="text" placeholder="Img URL" />
    );
}

export default FormInfo;

const InputBox = styled.input`
  padding:8px 10px;
  background-color: #a055ff;
  line-height: 20px;
  font-size: 16px;
  color: #fff;
  border-radius: 20px;
  border: none;
  outline: none;
  &::placeholder {color:#ccc;}
`;