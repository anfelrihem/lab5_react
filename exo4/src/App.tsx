import { useState } from "react";
import "./App.css";

// Type pour un div stylé
interface StyledDiv {
  width: string;
  height: string;
  backgroundColor: string;
}

export default function App() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [divs, setDivs] = useState<StyledDiv[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (width && height && backgroundColor) {
      setDivs([...divs, { width, height, backgroundColor }]);
      setWidth("");
      setHeight("");
      setBackgroundColor("");
    }
  };

  return (
    <div className="App">
      <h2>Create a Div</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Width (px): </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>

        <div>
          <label>Height (px): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div>
          <label>Background Color: </label>
          <input
            type="text"
            placeholder="e.g. green or #0dff00ff"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>

        <button type="submit">Add Div</button>
      </form>

      <h3>Divs</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {divs.map((d, index) => (
          <div
            key={index}
            style={{
              width: `${d.width}px`,
              height: `${d.height}px`,
              backgroundColor: d.backgroundColor,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
