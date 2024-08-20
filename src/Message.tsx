import { useState } from "react";

function Message() {
  const items = ["apple", "pear", "raspberry", "blueberry", "peach"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List:</h1>

      {items.length === 0 && <p>Not work</p>}
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            style={
              selectedIndex === index
                ? { backgroundColor: "blue" }
                : { backgroundColor: "black" }
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Message;
