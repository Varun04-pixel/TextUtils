import React, { useState } from "react";

function Form() {
  const [text, setText] = useState("");
  const [copyBtn, setCoptBtn] = useState('Copy Text')

  const trimText = (str) => {
    let newText = ''
    let spaceSeen = false
    for(let a of str) {
      if(a === " ") {
        if(!spaceSeen) {
          newText += " "
          spaceSeen = true
        }
      } else {
        newText += a;
        spaceSeen = false
      }
    }
    return newText
  }
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
  const handleOnClickSentence = () => {
    let trimmedText = trimText(text);
    let newText = "";
    for(let i=0; i<trimmedText.length; i++) {
      if(i===0) {
        newText += trimmedText[i].toUpperCase();
        i++;
      }
      if(trimmedText[i] === ".") {
        if(trimmedText[i+1] !== " ") {
          newText += ". ";
          newText += trimmedText[i+1].toUpperCase();
          i++;
        } else {
          newText += ". ";
          newText += trimmedText[i+2].toUpperCase();
          i+=2;
        }
      } else {
        newText += trimmedText[i].toLowerCase();
      }
    }
    setText(newText);
  }
  const handleOnClickTrim = () => {
    setText(trimText(text));
  }
  const handleOnClickTitle = () => {
    const newText = text.split(" ").filter((ele) => {
      return ele.length > 0;
    }).map((ele) => {
      return ele.charAt(0).toUpperCase()+ele.slice(1).toLowerCase();
    }).join(" ");
    setText(newText);
  }
  const handleOnCopy = () => {
    navigator.clipboard.writeText(text)
    setCoptBtn('Copied')
    setTimeout(() => {
      setCoptBtn("Copy Text");
    }, 2000);
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
      <button onClick={handleOnClickUpper} className="btn btn-primary my-4 mx-4">
        UpperCase
      </button>
      <button
        onClick={handleOnClickLower}
        className="btn btn-primary my-auto mx-auto"
      >
        LowerCase
      </button>
      <button
        onClick={handleOnClickSentence}
        className="btn btn-primary mx-4 my-auto"
      >
        SentenceCase
      </button>
      <button onClick={handleOnClickTitle} className="btn btn-primary my-auto">
        TitleCase
      </button>
      <button onClick={handleOnClickTrim} className="btn btn-primary mx-4 my-auto">
        Trim Text
      </button>
      <button onClick={handleOnCopy} className="btn btn-primary my-4">
         {copyBtn}
      </button>
      <button onClick={handleOnClear} className="btn btn-primary mx-4 my-4">
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