import React from "react";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";

function HomePage() {
  return (
    <main className="homepage" aria-labelledby="homepage-title">
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </main>
  );
}

export default HomePage;
