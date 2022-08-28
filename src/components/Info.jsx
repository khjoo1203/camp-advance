import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMusic } from "../redux/module/musicSlice";

const Info = ({ getMusic }) => {
  const {coverUrl, artist, title, like, id } = getMusic;
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const deleteItem = (e) => {
    e.preventDefault();
    dispatch(deleteMusic(id))
    navigate(-1)
  }
  return (
    <StInfoContainer>
      <StAlbumSet>
        <StAlbumImg src={coverUrl} />
        <StArtist>{artist}</StArtist>
        <StTiltle>{title}</StTiltle>
      </StAlbumSet>
      <StButtonSet>
        {like ? <StLike>♥️</StLike> : <StLike>♡</StLike>}
        <StEachButton onClick={deleteItem}>Delete this track</StEachButton>
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
  width: 600px;
  height: 600px;
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
  color: #764abc;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  transition: 0.5s;
  padding: 5px;
  &:hover{
    background-color: #764abc;
    color: white;
  }
`;

const StLike = styled.div`
  font-size: 40px;
  color: #fa1e2d;
`;
