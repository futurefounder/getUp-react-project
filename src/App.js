// import "./styles.css";
import { QuantityPicker } from "react-qty-picker";
import React from "react";
import Countdown from 'react-countdown';

export default class App extends React.Component {
  render() {
    return (
      <div>
          <div className="App" >
            Hours <QuantityPicker max={24} smooth/>
            Minutes <QuantityPicker value={30} max={60} smooth/>
          </div>
          <button>Start</button>
          <p>Workout</p>  
          <Countdown date={Date.now() + 5000}>
            <Completionist />
          </Countdown>      
        </div>
    );
  }
}

// Random component
const Completionist = () => <span>
                              <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/nFIfv-jIgbI" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
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

