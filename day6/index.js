import React from 'react';
import ReactDOM from 'react-dom/client';
import yellowstone from './images/yellowstone.jpg'

// --- FUNCTION COMPONENT ---
// content in the app 
const App = function () {
    // create a constant variable
    const divText ='I am a text in a variable'
    // create a style variable
    const styleJSX ={color:'purple', fontFamily:'Algerian'}
    return (
        <div>
            <h1 style={{ color: "magenta", textAlign: "center" }}>Welcome to ReactJS</h1>
            <p>Let's be familiar with JSX elements</p>
            <h2>Activity: ____ </h2>
            <p>when I check your React App, I should see a list here</p>
            <h2>Inline styling</h2>
            <label for="email" style={{ color: "olive", padding: "0.5em 1em", fontWeight:'bolder' }}>Enter e-mail</label>
            <input id='email' type='text' placeholder='Type your email' style={{backgroundColor:'rgb(230,230,230)', padding:'0.5em', borderRadius:'0.5em'}}/>
            <button style={{marginLeft:'1em', backgroundColor:'magenta', padding:'0.5em 1em', borderRadius:'0.5em', color:'whitesmoke'}}>Submit form</button>
            <figure >
                <img src={yellowstone} style={{width:'50%'}}/>
            </figure>
            <p className='title'>Adding a class name to a JSX element</p>
            <p className='txtVar'>{divText}</p>
            <p style={styleJSX}>{divText}</p>
            <h2>Class activity</h2>
            <p> image with at least two inline styles</p>
        </div>
    )
}

//rooting the app
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(App())

