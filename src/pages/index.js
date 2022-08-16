import React from "react";
import MyBets from "./../components/MyBets";
import { MYBETS } from "./../mockdata/mybets.js";

const IndexPage = () => {
  return <MyBets bets={MYBETS} />;
};

export default IndexPage;
