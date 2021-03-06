// import "./styles.css";
// What do I have to think about in order to get the value from QuantityPicker to Countdown?
// ✅ You’ll want to look at using onChange to get the value from the picker,
// then look storing it int the state of the app component.
// ✅ https://reactjs.org/tutorial/tutorial.html#lifting-state-up or If using hooks https://reactjs.org/docs/hooks-state.html
// What do I have to think about when I want the countdown component not to be visible, but rather work “in the background”?
// Option 1 is to return null in the react-countdown renderer while it’s counting down
// Option 2 is to create your own countdown using setTimeout or setInterval in the app component. Probably easier to go with option 1 :)
// ▶️ Conditional Rendering for showing counter/content only when button clicked
// ▶️ https://www.robinwieruch.de/conditional-rendering-react/#:~:text=In%20a%20conditional%20render%2C%20a,%2C%20the%20list%20is%20empty%22.

import { QuantityPicker } from "react-qty-picker";
import React, { useState } from "react";
import Countdown from "react-countdown";
import { ChakraProvider, Button, Container } from "@chakra-ui/react";

// const [currentValue]  = React.useState(value);

function App() {
  // const pressedButton = props.pressedButton;
  const [countHours, setCountHours] = useState(0);
  const [countMinutes, setCountMinutes] = useState(30);
  const [show, setShow] = useState(false);

  // Renderer callback with condition

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return null;
    }
  };

  return (
    <ChakraProvider>
      <div>
        <Container centerContent>
          <div className="App">
            Hours{" "}
            <QuantityPicker
              max={24}
              min={0}
              onChange={(value) => setCountHours(value)}
              smooth
            />
            {/* <p>Hours Selected {countHours}</p> */}
            {/* Test Button to test state */}
            {/* <button onClick={() => setCount(count + 1)}>
                    Click me
                    </button>
                    <p>You clicked {count} times</p> */}
            {/* / Test Button to test state */}
            Minutes{" "}
            <QuantityPicker
              value={30}
              max={60}
              min={0}
              onChange={(value) => setCountMinutes(value)}
              smooth
            />
            {/* <p>Minutes Selected {countMinutes}</p> */}
            {console.log("Hrs:" + countHours, "Mins:" + countMinutes)}
          </div>
          <p></p>
          {show ? <p>Workout</p> : null}
          <Button colorScheme="teal" onClick={() => setShow(true)}>
            Start
          </Button>
          <Button colorScheme="blue" onClick={() => setShow(false)}>
            Hide
          </Button>
          <p>Workout</p>
          <Countdown date={Date.now() + 5000} autoStart={true}>
            <Completionist />
          </Countdown>
        </Container>
      </div>
    </ChakraProvider>
  );
}

// Random component
const Completionist = () => (
  <span>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/nFIfv-jIgbI"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </span>
);
export default App;
