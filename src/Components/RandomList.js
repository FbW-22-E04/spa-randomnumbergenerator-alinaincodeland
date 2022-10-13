import { useState } from "react";

function RandomList() {
  const [num, setNum] = useState("");

  return (
    <div className="container">
      <ul>
        <li>{Math.floor(Math.random())}</li>
        <li></li>
      </ul>
      <div>
        <button>Generate a random number!</button>
      </div>
    </div>
  );
}

export default RandomList;
