import { useState } from "react";
//{ items: [], heading: string}
interface listGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: listGroupProps) {
  //usestate -1: so that nothing in the list is selected
  //this line sets which item gets selected
  const [selectedActiveState, setSelectedActiveState] = useState(-1);

  //Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  //rendering list
  return (
    <>
      <h1 border-secondary mt-5>
        List
      </h1>
      {/* conditional rendering */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedActiveState === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedActiveState(index);
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
