// import "./styles.css";
// What do I have to think about in order to get the value from QuantityPicker to Countdown?
// ✅ You’ll want to look at using onChange to get the value from the picker,
// then look storing it int the state of the app component.
// ✅ https://reactjs.org/tutorial/tutorial.html#lifting-state-up or If using hooks https://reactjs.org/docs/hooks-state.html
// What do I have to think about when I want the countdown component not to be visible, but rather work “in the background”?
// Option 1 is to return null in the react-countdown renderer while it’s counting down
// Option 2 is to create your own countdown using setTimeout or setInterval in the app component. Probably easier to go with option 1 :)

import { QuantityPicker } from "react-qty-picker";
import React, { useState } from "react";
import Countdown from "react-countdown";
import { ChakraProvider, Button, Container } from "@chakra-ui/react";

function App() {
  const [countHours, setCountHours] = useState(0);
  const [countMinutes, setCountMinutes] = useState(30);
  const [start, setStart] = useState(false);

  const time =
    Date.now() + 60 * 60 * countHours * 1000 + countMinutes * 60 * 1000;

  // Renderer callback with condition
  function startRenderer() {
    setStart(true);
  }

  return (
    <ChakraProvider>
      <div>
        <Container centerContent>
          {!start && (
            <div className="App">
              Hours{" "}
              <QuantityPicker
                max={24}
                min={0}
                onChange={(value) => setCountHours(value)}
                smooth
                value={countHours}
              />
              Minutes{" "}
              <QuantityPicker
                value={countMinutes}
                max={60}
                min={0}
                onChange={(value) => setCountMinutes(value)}
                smooth
              />
              {/* <p>Minutes Selected {countMinutes}</p> */}
              {console.log("Hrs:" + countHours, "Mins:" + countMinutes)}
              <p></p>
              <Button colorScheme="teal" onClick={() => startRenderer()}>
                Start
              </Button>
            </div>
          )}
          {start ? (
            <Countdown date={time} autoStart={true}>
              <Renderer />
            </Countdown>
          ) : null}
        </Container>
      </div>
    </ChakraProvider>
  );
}

const Renderer = ({ hours, minutes, seconds, completed, started }) => {
  console.log(hours, minutes, seconds, completed, started);
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return null;
  }
};

// Random component
const Completionist = () => (
  <span>
    <p>Workout</p>
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
