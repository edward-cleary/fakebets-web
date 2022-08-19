import React from "react";
import MyBets from "./../components/MyBets";
import { MYBETS } from "./../mockdata/mybets.js";
import Test from "../components/Test";

const IndexPage = () => {
  return (
    <>
      <MyBets bets={MYBETS} />
    </>
  );
};

export default IndexPage;
