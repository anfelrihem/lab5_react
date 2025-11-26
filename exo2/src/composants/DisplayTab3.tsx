import { useState } from "react";

export default function DisplayTab3() {
  const [tab, setTab] = useState(["hello", "world", "from", "react"]);

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
