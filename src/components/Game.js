import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDtail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popUp } from "../animations";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  //Load Detail Handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDtail(id));
  };
  return (
    <StyledGame
      variants={popUp}
      initial="hidden"
      animate="show"
      layoutId={id}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <h3>Game name: {name}</h3>
        <p> {released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  text-align: center;
  border-radius: 1rem;
`;

export default Game;
