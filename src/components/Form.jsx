import React, { useState } from "react";
import FormInfo from "./FormInfo";
import styled from "styled-components";

const Form = (props) => {
    const [toggle, setToggle] = useState(false);
   return (
    <Formed>
        <div>
            <InputBox type="text" placeholder="Artist" />
            <InputBox type="text" placeholder="title" />
            <Button>Submit</Button>
        </div>
    
        <div>
            {toggle && <FormInfo />}
        </div>
            <ToggleButton onClick={() => {setToggle(!toggle)}} >-</ToggleButton>
    </Formed>
   ); 
}

export default Form;

const Formed = styled.form`
  max-width: 1200px;
  min-width: 800px;
`;

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

const Button = styled.button`
  background-color: #7100ff;
  padding: 10px;
  color:#fff;
  border-radius: 20px;
  border: none;
`;

const ToggleButton = styled.button`
  width: 130px;
  height: 30px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: #7100ff; 
`;