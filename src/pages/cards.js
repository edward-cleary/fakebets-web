import * as React from "react";
import UpcomingCards from "../components/UpcomingCards";
import { UPCOMINGCARDS } from "../mockdata/upcomingcards";
import { Test } from "../components/Test";

const CardsPage = () => {
  return <UpcomingCards cards={UPCOMINGCARDS} />;
};

export default CardsPage;
