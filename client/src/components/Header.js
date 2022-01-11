import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../components/auth/GoogleAuth";

function Header() {
  const homePage = () => (
    <Link to="/" className="item">
      <img className="blue action big react icon" src="https://www.tubesitessubmitter.com/blog/wp-content/uploads/2019/02/xvideos.png" alt="xvideo" width={220} />
    </Link>
  );
  const startStreaming = () => (
    <Link to="/streams/new" className="item">
      <button className="ui right labeled icon button primary ">
        <i className="right tv icon"></i>
        เริ่ม Streaming
      </button>
    </Link>
  );
  return (
    <div
      className={`ui attached ${
        window.innerWidth < 800 ? "mini" : "massive"
      } menu`}
      style={{ marginBottom: "3vh" }}
    >
      {homePage()}
      <div className="right menu">
        {window.innerWidth > 800 ? startStreaming() : null}
        <GoogleAuth />
      </div>
    </div>
  );
}

export default Header;
