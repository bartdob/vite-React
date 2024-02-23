import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Los Angels", "London", "Paris"];
  const messageItems = () => {
    items.length === 0 && <p>No item found</p>;
  };
  // const handleClick = (event: MouseEvent) => console.log(event);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List Group</h1>
      {messageItems()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
