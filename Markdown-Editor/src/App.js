/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown/with-html";
import Editor from "./Editor";

const App = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Editor/>
    </div>
    // <div className="App" css={styles}>
    //   <h1>Easy Markdown Editor</h1>
    //   <div className="markdownContainer">
    //     <textarea onChange={(e) => setValue(e.target.value)}></textarea>
    //     <ReactMarkdown className="output" source={value} escapeHtml={false} />
    //   </div>
    // </div>
  );
};

// const styles = css`

// `;

export default App;
