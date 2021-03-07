/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown/with-html";

const App = () => {
  const [value, setValue] = useState("");
  return (
    <div className="App" css={styles}>
      <h1>Easy Markdown Editor</h1>
      <div className="markdownContainer">
        <textarea onChange={(e) => setValue(e.target.value)}></textarea>
        <ReactMarkdown className="output" source={value} escapeHtml={false} />
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  min-height: 100vh;
  background: #913491;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  h1 {
    font-size: 40px;
    line-height: 1;
    margin-bottom: 5%;
    margin-top: 5%;
  }
  .markdownContainer {
    width: 100%;
    margin-bottom: 5%;
    max-width: 1400px;
    display: flex;
    a{
      color: #EC0469;
    }
    textarea,
    .output {
      width: 100%;
      max-width: 50%;
      padding: 20px;
      background: whitesmoke;
      color: #330133;
      font-size: 14pt;
      border-radius: 10px;
    }
    textarea {
      width: 100%;
      resize: none;
      border: none;
      outline: none;
    }
    .output {
      background: #330133;
      color: #fff;
      height: 800px;
      margin-left:  5%;
      height: auto;
      padding: 20px;
    }
  }
  @media (max-width: 980px) {
    .markdownContainer {
      flex-direction: column;
      .output,
      textarea {
        max-width: 100%;
        height: 400px;
      }
    }
  }
  @media (max-width: 1440px) {
    .markdownContainer {
      max-width: 90%;
    }
  }
`;

export default App;
