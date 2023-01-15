import React from "react";
import "./Main.css";
function Main() {
  return (
    <main>
      <div className="main_left">
        <h3>HTML</h3>
        <h4>The language for building web pages</h4>
        <a className="btn-html">Learn HTML</a>

        <a className="btn-tutorial">Video Tutorial</a>

        <a className="btn-refrence">HTML Refrence</a>

        <a className="btn-certified">Get Certified</a>
      </div>
      <div className="main_right">
        <h3>HTML Example:</h3>
        <div>
          <span className="HtmlContent">HTML Content </span>
        </div>
        <button className="btn-try">Try it Yourself</button>
      </div>
    </main>
  );
}

export default Main;
