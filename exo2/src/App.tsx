import { useState } from "react";
import "./App.css";


interface DisplayTabProps {
  table: string[];
}

function DisplayTab({ table }: DisplayTabProps) {
  const [tab, setTab] = useState(table);

  const handleClick = (indexToRemove: number) => {
    setTab(tab.filter((_, index) => index !== indexToRemove));
  };

  return (
    <ul>
      {tab.map((item, index) => (
        <li key={index} onClick={() => handleClick(index)}>
          Element {index + 1} is: {item}
        </li>
      ))}
    </ul>
  );
}


function App() {
  const tab1 = ["hello", "world", "from", "react"];
  const tab2 = ["apple", "banana", "cherry"];
  const tab3 = ["dog", "cat", "mouse", "rabbit"];

  return (
    <div className="App">
      <h2>Table 1</h2>
      <DisplayTab table={tab1} />

      <h2>Table 2</h2>
      <DisplayTab table={tab2} />
      <h2>Table 3</h2>
      <DisplayTab table={tab3} />
    </div>
  );
}

export default App;
