
import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case",'success');

    }
    const handlelowClick = () => {
        
       
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case",'success');

    }
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    } 
    
 
    const handleOnchange = (event) => {
        console.log('on change')
        setText(event.target.value);


    }  
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }


    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('');
    // setText('new text'); correct way to change state
    // text ='new text '; wrong way to change state
  
    return (
        <>
            <div className="container mb-3"style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="8" 
                        onChange={handleOnchange}style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
                    <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Upper</button>
                    <button className='btn btn-primary mx-2 my-2' onClick={handlelowClick}>Lower</button>
                    <button className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>
                        clear Text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>    
                        

                    
                
                </div>
            </div>
            <div className='container my-3'style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Text summary</h2>
                <p>{text.split(" ").length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read </p>
                <h2>preview</h2>
                <p>{text.length > 0?text:"Enter something to preview here"}</p>

            </div>

        </>
    )
}
