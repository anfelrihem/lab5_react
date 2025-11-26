export default function DisplayTab1() {
  const tab = ["hello", "world", "from", "react"];

  return (
    <ul>
      {tab.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
