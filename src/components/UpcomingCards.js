import React from "react";
import "./upcomingcards.module.css";
import FightCardList from "./FightCardList";

function UpcomingCards(props) {
  const upcomingcards = props.cards.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  function Card({ card }) {
    return (
      <li>
        <h3>{card.event_name}</h3>
        <p>{card.event_date}</p>
        <FightCardList fights={card.fights} />
      </li>
    );
  }

  return (
    <>
      <section>
        <h3>Upcoming Cards</h3>
        <ul>{upcomingcards}</ul>
      </section>
    </>
  );
}

export default UpcomingCards;
