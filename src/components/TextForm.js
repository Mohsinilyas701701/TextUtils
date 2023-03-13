import React, { useState } from 'react'

function TextForm(props) {

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', 'success');
    }

    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase', 'success');

    }

    const clearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Cleared Text', 'success');

    }

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied Text', 'success');

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlert('Removed Extra Spaced', 'success');

    }

    const [text, setText] = useState('')
    return (
        <>
            <div className="container">
                <h1 style={{color: props.mode  === 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode  === 'dark' ? 'grey' : 'white', color: props.mode  === 'dark' ? 'white' : 'black' }} id="myBox" rows="10"></textarea>
                    <button className='btn btn-primary' onClick={upperCase}>Convert to Upper Case</button>
                    <button className='btn btn-info mx-2' onClick={lowerCase}>Convert to lower Case</button>
                    <button className='btn btn-info mx-2' onClick={clearText}>Clear Text</button>
                    <button className='btn btn-info mx-2' onClick={handleCopy}>Copy Text</button>
                    <button className='btn btn-info mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>

            <div className="container my-4" style={{color: props.mode  === 'dark' ? 'white' : 'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Read Time {Math.floor(0.008 * text.split(" ").length)}</p>
                <h2>Preview Text</h2>
                <p>{text.length> 0 ? text : 'Enter Something to preview'}</p>
            </div>

        </>
    )
}

export default TextForm
