import { useState } from "react";

function RandomList() {
  const [number, setNumber] = useState([]);

  const numArray = [];

  const generateRandomNumber = () => {
    let randomNum = Math.floor(Math.random() * 100);
    numArray = [...number, randomNum];
    setNumber(numArray);
  };

  const handleClick = () => {
    setNumber(generateRandomNumber());
  };

  return (
    <div>
      <button onClick={handleClick}>Generate a random number!</button>
      <div>
        {number.map((number) => {
          <p>{number} </p>;
        })}
      </div>
    </div>
  );
}

export default RandomList;
