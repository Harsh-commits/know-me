import React, { useState } from "react";
import "./Portfolio.css";
import { Tabs, Tab } from "react-bootstrap";
import Projectall from "./Projectall";

function Portfolio() {
  const [key, setKey] = useState("home");
  return (
    <div className="portfolio">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab
          className="portfolio_tab"
          eventKey="home"
          title="Home"
          style={{ fontWeight: 800 }}
        >
          <Projectall />
        </Tab>
        <Tab className="portfolio_tab" eventKey="profile" title="Profile">
          <Projectall />
        </Tab>
        <Tab className="portfolio_tab" eventKey="contact" title="Contact">
          <Projectall />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Portfolio;
