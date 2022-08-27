import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import '../App.css';

const Info = ({getMusic}) => {
  const navigate = useNavigate()
  return (
<StInfoContainer>
      <StAlbumSet>
        <StAlbumImg src={getMusic.coverUrl}/>
        <StArtist>{getMusic.artist}</StArtist>
        <StTiltle>{getMusic.title}</StTiltle>
      </StAlbumSet>
      <StButtonSet>
        <StLike>♥</StLike>
        <StEachButton>DEL</StEachButton>
        <StEachButton onClick={()=>{
          navigate(-1)
        }}>Go Back</StEachButton> 
      </StButtonSet>
    </StInfoContainer>
  );
}

export default Info;

const StInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border : 3px solid black;
  max-width: 1200px;
  min-width: 800px;
  margin: auto;

`;
const StAlbumSet = styled.div`
  border : 3px solid purple;
  padding: 10%;
  margin: 0 20px 0 20%;
  /* justify-content : center; */
  /* align-items: center; */


`;
const StAlbumImg = styled.img`
  border : 1px solid blue;
  width : 300px;
  height : 300px;

`;

const StArtist = styled.h3`
  border : 1px solid red;
  text-align: center;
  font-size: 15px;
  margin : 10px auto;
  /* justify-content : center; */
  /* align-items: center; */
`;

const StTiltle = styled.p`
  border : 1px solid green;
  text-align : center;
  font-size : 20px;
  margin : 10px auto;

`;

const StButtonSet = styled.div`
  border : 1px solid green;
  position: relative;
  /* float : right; */
  /* justify-content : center; */
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  
`;

const StLike = styled.div`
border : 1px solid red;
  width : 60px;
  height: 60px;
  font-size: 40px;
  text-align: center;

  position : relative;
  word-break:break-all;
  color : red;
`;
const StEachButton = styled.button`
  margin : 10px;
`;