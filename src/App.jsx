import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 100,
  });

  const handleFirstName = (e) => {
    let value = e.target.value;
    setPerson((prevPerson) => ({
      ...prevPerson,
      firstName: value,
    }));
  };
  const handleLastName = (e) => {
    let value = e.target.value;
    setPerson((prevPerson) => ({
      ...prevPerson,
      lastName: value,
    }));
  };
  const handleIncreaseAge = () => {
    setPerson((person) => ({
      ...person,
      age: person.age + 1,
    }));
    // we've called setPerson, surely person has updated?
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  return (
    <>
      <h1>{person.firstName + " " + person.lastName}</h1>
      <h2>{person.age}</h2>
      <input
        type="text"
        value={person.firstName}
        onChange={handleFirstName.bind(this)}
      ></input>
      <input
        type="text"
        value={person.lastName}
        onChange={handleLastName.bind(this)}
      ></input>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

/*function Component() {
  const [count, setCount] = useState({ inCount: 1 });

  const increaseCount = () => {
    setCount({ ...count, inCount: count.inCount + 1 });
  };

  return (
    <>
      <h1>{count.inCount}</h1>
      <button onClick={increaseCount}></button>
    </>
  );
}*/

export default function App() {
  return (
    <div>
      <Person />
    </div>
  );
}
