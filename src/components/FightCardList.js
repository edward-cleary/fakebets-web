import React from "react";

function FightCardList(props) {
  const fightcardlist = props.fights.map((fight) => {
    return <Fight key={fight.id} fight={fight} />;
  });

  function Fight({ fight }) {
    return (
      <li>
        <div>
          <img src={fight.home.image} alt={fight.home.name} />
          <h6>{fight.home.name}</h6>
        </div>
        <div>Vs.</div>
        <div>
          <img src={fight.away.image} alt={fight.away.name} />
          <h6>{fight.away.name}</h6>
        </div>
        <hr />
      </li>
    );
  }

  return (
    <>
      <ul>{fightcardlist}</ul>
    </>
  );
}

export default FightCardList;
