import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __deleteMusic, __toggleLike } from "../redux/module/musicSlice";
import AllRounderButton from "./AllRounderButton";

const Info = ({ getMusic }) => {
  const { coverUrl, artist, title, like, id } = getMusic;
  const [likeNow, setLikeNow] = useState(like);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteItem = (e) => {
    e.preventDefault();
    dispatch(__deleteMusic(id));
    navigate(-1);
  };
  const likeHandler = () => {
    dispatch(__toggleLike(id, setLikeNow({like:!like})))
    console.log(id)
    console.log(likeNow)
  }
  return (
    <StInfoContainer>
      <StAlbumSet>
        <StAlbumImg src={coverUrl} />
        <StArtist>{artist}</StArtist>
        <StTiltle>{title}</StTiltle>
      </StAlbumSet>
      <StButtonSet>
        {like ? <StLike onClick={likeHandler}>♥️</StLike> : <StLike onClick={likeHandler}>♡</StLike>}
        <AllRounderButton
          onClick={() => {
            navigate(-1);
          }}
          buttonName={"Go Back"}
        />
      </StButtonSet>
      <StButtonSet>
        <AllRounderButton buttonName={"Edit"}/>
      </StButtonSet>
      <StButtonSet>
        <AllRounderButton buttonName={"Delete"} onClick={deleteItem} />
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
  margin: 20px auto;
`;
const StAlbumSet = styled.div`
  margin: 30px 0 0 0;
  width: 450px;
`;
const StAlbumImg = styled.img`
  width: 450px;
  height: 450px;
`;

const StArtist = styled.h2``;

const StTiltle = styled.h2``;

const StButtonSet = styled.div`
  width: 450px;
`;

const StLike = styled.div`
  font-size: 40px;
  color: #fa1e2d;
`;
