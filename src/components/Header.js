import React from "react";
import Nav from "./Nav";
import Balance from "./Balance";

function Header() {
  return (
    <header>
      <h1>FB</h1>
      <Balance balance={"$100"} />
      <Nav />
    </header>
  );
}

export default Header;
