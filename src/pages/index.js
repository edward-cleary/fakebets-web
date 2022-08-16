import * as React from "react";
import Layout from "../components/Layout";
import MyBets from "../components/MyBets";
import UpcomingCards from "../components/UpcomingCards";
import { MYBETS } from "../mockdata/mybets";
import { UPCOMINGCARDS } from "../mockdata/upcomingcards";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <MyBets bets={MYBETS} />
        <UpcomingCards cards={UPCOMINGCARDS} />
      </Layout>
    </>
  );
};

export default IndexPage;
