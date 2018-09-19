import React from "react";

function main() {
  return (
    <div className="main">
      <img
        src={require("./public/images/black-mango.png")}
        className="mango-logo"
      />
      <h1>MangoHacks</h1>
      <h3>
        Florida’s <b>sweetest</b> hackathon.
      </h3>
      <span className="sweetest-rectangle" />
      <a href="http://eepurl.com/dHj0oH">
        <button className="pre-btn">Pre-Register</button>
      </a>
    </div>
  );
}

function story() {
  return (
    <div className="story">
      <h2>A place for discovery.</h2>
      <span className="discovery-rectangle" />
      <p>
        It's a <b>36 hour</b> hackathon that encourages learning, collaboration,
        growth, innovation, and <span>fun.</span>
      </p>
    </div>
  );
}

function footer() {
  return (
    <div className="footer-container">
      <footer>
        <div className="sm">
          <a href="https://www.instagram.com/fiumangohacks/" target="_blank">
            <img src={require("./public/images/ig.svg")} />
          </a>
          <a href="https://twitter.com/fiumangohacks" target="_blank">
            <img src={require("./public/images/twitter.svg")} />
          </a>
          <a href="https://www.facebook.com/MangoHacks/" target="_blank">
            <img src={require("./public/images/fb.svg")} />
          </a>
          <h5>Spring 2019</h5>
        </div>
        <a href="https://2017.mangohacks.com" target="_blank">
          <p>2018 site</p>
        </a>
      </footer>
    </div>
  );
}

function leftAssets() {
  return (
    <React.Fragment>
      <div className="la">
        <div className="la-tealLines">
          <img src={require("./public/images/teal_lines.svg")} />
        </div>
      </div>
      <div className="la">
        <div className="la-pills-2">
          <img src={require("./public/images/pills_2.svg")} />
        </div>
      </div>
      <div className="la">
        <div className="la-pills-3">
          <img src={require("./public/images/pills_2.svg")} />
        </div>
      </div>
    </React.Fragment>
  );
}

function rightAssets() {
  return (
    <React.Fragment>
      <div className="ra">
        <div className="ra-purpLines">
          <img src={require("./public/images/purp_lines.svg")} />
        </div>
      </div>

      <div className="ra">
        <div className="ra-pills-4">
          <img src={require("./public/images/pills.svg")} />
        </div>
      </div>
      <div className="ra">
        <div className="ra-pills-5">
          <img src={require("./public/images/pills_2.svg")} />
        </div>
      </div>
    </React.Fragment>
  );
}
export default class App extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        {main()}
        {story()}
        {footer()}
        <div className="utils">
          {leftAssets()}
          {rightAssets()}
        </div>
      </React.Fragment>
    );
  }
}
