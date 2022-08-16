import React from "react";
import "./mybets.module.css";

function MyBets(props) {
  const myBets = props.bets.map((bet) => {
    return <MyBet key={bet.id} bet={bet} />;
  });

  function MyBet({ bet }) {
    return (
      <li>
        <div>
          <h5>
            <span>{`${bet.choice}`}</span>
            {` vs. ${bet.opponent}`}
          </h5>
          <h6>{`${bet.event_name} - ${bet.event_date}`}</h6>
        </div>
        <div>
          <div>
            <p>{`To Win: ${bet.to_win}`}</p>
            <p>{`To Lose: ${bet.wager}`}</p>
          </div>
        </div>
      </li>
    );
  }

  return (
    <section>
      <h3>My Bets</h3>
      <ul>{myBets}</ul>
    </section>
  );
}

export default MyBets;
