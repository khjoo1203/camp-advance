import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Info = ({ getMusic }) => {
  const navigate = useNavigate();
  return (
    <StInfoContainer>
      <StAlbumSet>
        <StAlbumImg src={getMusic.coverUrl} />
        <StArtist>{getMusic.artist}</StArtist>
        <StTiltle>{getMusic.title}</StTiltle>
      </StAlbumSet>
      <StButtonSet>
        <StEachButton onClick={() => {}}>Delete this track</StEachButton>
        <StEachButton
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </StEachButton>
      </StButtonSet>
    </StInfoContainer>
  );
};

export default Info;

const StInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  min-width: 800px;
  margin: 0 auto 20px;
`;
const StAlbumSet = styled.div`
  width: 1000px;
  margin: 50px auto 10px;
`;
const StAlbumImg = styled.img`
  margin: 10px;
  width: 300px;
  height: 300px;
  box-shadow: 5px 5px 20px grey;
`;

const StArtist = styled.h2`
  margin: 10px;
  text-align: center;
  margin: 10px auto;
`;

const StTiltle = styled.h2`
  margin: 10px;
  text-align: center;
  margin: 10px auto;
`;

const StButtonSet = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const StEachButton = styled.button`
  margin: 10px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  transition: 0.5s;
  &:hover {
    color: black;
  }
`;
