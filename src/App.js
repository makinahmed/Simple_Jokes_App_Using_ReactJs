import {   useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [joke, setJoke] = useState("At first type your name below!");

  const handleJoke = (firstName, lastName) => {
    fetch(
      `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
    )
      .then((res) => res.json())
      .then((res2) => {
        setJoke(res2.value.joke);
      });
  };



  return (
    <div className="App">
      <h2>Make Yourself Laugh!!</h2>
      <p>{joke}</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <label htmlFor="firstName">
        <h4>Type First Name: </h4>
      </label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="lastName">
        <h4>Type Last Name: </h4>
      </label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => handleJoke(firstName, lastName)}>
        {" "}
        Submit Name
      </button>
    </div>
  );
}

export default App;
