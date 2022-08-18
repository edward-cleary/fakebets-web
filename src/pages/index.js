import React from "react";
import MyBets from "./../components/MyBets";
import Test from "./../components/Test";
import { MYBETS } from "./../mockdata/mybets.js";

const IndexPage = () => {
  return (
    <>
      <MyBets bets={MYBETS} />
      <Test />
    </>
  );
};

export default IndexPage;
