import { useState } from "react";

interface DisplayTabProps {
  table: string[];
}

export default function DisplayTab({ table }: DisplayTabProps) {
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
