/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState } from "react";
import "./style.css";
import ReactMarkdown from "react-markdown/with-html";

const Editor = () => {
  const [value, setValue] = useState("# Markdown Preview");
  return (
    <div className="editor">
      <div className="markdownContainer">
        <textarea class="input" onChange={(e) => setValue(e.target.value)}>
          # Markdown Preview
        </textarea>
        <ReactMarkdown className="output" source={value} escapeHtml={false} />
      </div>
    </div>
  );
};

export default Editor;
