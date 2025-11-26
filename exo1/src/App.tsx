import { useState } from "react";
import "./App.css";

// Exercise 1: ClickButton
function ClickButton() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <button onClick={() => setClicked(true)}>ClickMe</button>
      {clicked && <p>Clicked</p>}
    </div>
  );
}

// Exercise 2: ToggleButton
function ToggleButton() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);
  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
      <p>{clicked ? "Clicked" : "Not Clicked"}</p>
    </div>
  );
}

// Exercise 3: Three Buttons
function ThreeButtons() {
  const [lastClicked, setLastClicked] = useState("");
  const handleClick = (buttonName: string) => setLastClicked(buttonName);

  return (
    <div>
      <button onClick={() => handleClick("Button 1")}>Button1</button>
      <button onClick={() => handleClick("Button 2")}>Button2</button>
      <button onClick={() => handleClick("Button 3")}>Button3</button>
      <p>{lastClicked ? `${lastClicked} was clicked` : "No button clicked yet"}</p>
    </div>
  );
}

// Exercise 4: Counter
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
}

// Main App
function App() {
  return (
    <div className="App">
      <h2>1: Click Button</h2>
      <ClickButton />

      <h2>2: Toggle Button</h2>
      <ToggleButton />

      <h2>: Three Buttons</h2>
      <ThreeButtons />

      <h2>4: Counter</h2>
      <Counter />
    </div>
  );
}

export default App;
