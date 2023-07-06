import React, {useState} from 'react'


export default function (props) {
const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
}
const handleDownClick = ()=>{
     // console.log("Lower was clicked" + text);
     let newText = text.toLowerCase();
     setText(newText)
}
const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value);
}


    const [text, setText] = useState('');
    // setText("new text");
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example text area</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
    </div>
    <div className="container">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length - 1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
