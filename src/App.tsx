import ButtonB from "./components/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

let items = ["New York", "San Francisco", "Los Angels", "London", "Paris"];

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);
  const handleButton = () => {
    setAlertVisibility((prevCheck) => !prevCheck);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <button className="btn btn-warning" onClick={() => handleButton()}>
        Click
      </button>
      {alertVisible && <Alert>Alert</Alert>}
    </div>
  );
}

export default App;
