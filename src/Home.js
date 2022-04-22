import { useState } from "react";
const Home = () => {
  //let name = "Tony";
  const [name, setName] = useState("Tony");
  const [age, setAge] = useState(25);
  const handleClick = () => {
    setName("Maluki");
    setAge("30")
  };
  const handleClickAgain = (name) => {
    alert("Hello " + name);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click me </button>
      {/* <button onClick={() => handleClickAgain("Mario")}>Click me Again</button> */}
    </div>
  );
};

export default Home;
