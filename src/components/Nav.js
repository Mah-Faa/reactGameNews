import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandeler = (e) => {
    setTextInput(e.target.value);
  };
  const sumbitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <>
      |
      <StyledNav variants={fadeIn} initial="hidden" animate="show">
        <Logo onClick={clearSearched}>
          <img src={logo} alt="logo" />
          <h1>Mahfa</h1>
        </Logo>
        <form className="search" onSubmit={sumbitSearch}>
          <input type="text" onChange={inputHandeler} />
          <button>search</button>
        </form>
      </StyledNav>
    </>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    outline: none;
    border-radius: 50px 20px;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    border-radius: 50px 20px;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
