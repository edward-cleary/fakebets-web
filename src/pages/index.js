import React from "react";
import MyBets from "./../components/MyBets";
import { MYBETS } from "./../mockdata/mybets.js";
import TestComponent from "../components/TestComponent";

const IndexPage = () => {
  return (
    <>
      <MyBets bets={MYBETS} />
      <TestComponent />
    </>
  );
};

export default IndexPage;
