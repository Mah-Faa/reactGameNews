import axios from "axios";
import React, { Component } from "react";
import { gameDetailsURL, gameScreenshoutURL } from "../api";

export const loadDtail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING-DITAIL",
  });
  const detailData = await axios.get(gameDetailsURL(id));
  const screenShotData = await axios.get(gameScreenshoutURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
