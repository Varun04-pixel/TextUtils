import React, { useState } from "react";

function Form() {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleOnClickUpper = () => {
    const newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnClickLower = () => {
    const newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnClickTrim = () => {
    const newText = text.trim();
    setText(newText);
  }
  const handleOnClickTitle = () => {
    const newText = text.split(" ").filter((ele) => {
      return ele.length > 0;
    }).map((ele) => {
      return ele.charAt(0).toUpperCase()+ele.slice(1).toLowerCase();
    }).join(" ");
    setText(newText);
  }
  const handleOnClear = () => {
    setText("");
  }
  
  return (
    <div className="container w-75">
      <h3 style={{ textAlign: "left" }}>Enter your Text :</h3>
      <textarea
        className="form-control mt-4"
        value={text}
        onChange={handleOnChange}
        placeholder="Your text here ...."
        id="floatingTextarea2"
        style={{
          height: "200px",
          width: "100%",
        }}
      ></textarea>
      <button onClick={handleOnClickUpper} className="btn btn-primary my-4">
        UpperCase
      </button>
      <button
        onClick={handleOnClickLower}
        className="btn btn-primary my-auto mx-4"
      >
        LowerCase
      </button>
      <button onClick={handleOnClickTitle} className="btn btn-primary my-auto">
        TitleCase
      </button>
      <button onClick={handleOnClickTrim} className="btn btn-primary mx-4 my-auto">
        Trim Text
      </button>
      <button onClick={handleOnClear} className="btn btn-primary my-4">
         Clear
      </button>

      <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p className="border rounded border-primary p-2 w-50">
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p className="border rounded border-primary p-2 w-50">
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h2 className="mt-4">Preview</h2>
        <p className="border rounded border-primary p-2">
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </div>
  );
}

export default Form;