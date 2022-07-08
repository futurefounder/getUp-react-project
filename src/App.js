// import "./styles.css";
// What do I have to think about in order to get the value from QuantityPicker to Countdown?
// OK You’ll want to look at using onChange to get the value from the picker, 
// then look storing it int the state of the app component.
// https://reactjs.org/tutorial/tutorial.html#lifting-state-up or If using hooks  
// What do I have to think about when I want the countdown component not to be visible, but rather work “in the background”?
// Option 1 is to return null in the react-countdown renderer while it’s counting down
// Option 2 is to create your own countdown using setTimeout or setInterval in the app component. Probably easier to go with option 1 :)

import { QuantityPicker } from "react-qty-picker";
import React, { useState } from "react";
import Countdown from 'react-countdown';

// const [currentValue]  = React.useState(value);

function App() {  
  
  const [count, setCount] = useState(0);
  
  return (
      <div>
          <div className="App" >
            Hours <QuantityPicker 
                    max={24} 
                    min={0} 
                    onChange={(value) => setCount(value = count)}
                    smooth/>
                    {/* Test Button to test state */}
                    <button onClick={() => setCount(count + 1)}>
                    Click me
                    </button>
                    <p>You clicked {count} times</p>
                    {/* / Test Button to test state */}  
            Minutes <QuantityPicker 
                    value={30} 
                    max={60} 
                    min={0} 
                    onChange={(value)=>{ console.log(value); }}
                    smooth/>
          </div>
          <button onClick={Completionist()}>Start</button>
          <p>Workout</p>  
          <Countdown date={Date.now() + 5000}>
            <Completionist />
          </Countdown>      
        </div>
    );
}

// Random component
const Completionist = () => <span>
                              <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/nFIfv-jIgbI" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                              </iframe>
                            </span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};

export default App