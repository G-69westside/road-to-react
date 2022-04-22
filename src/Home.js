const Home = () => {
  const handleClick = () => {
    alert("Clicked");
  };
  const handleClickAgain = (name) => {
    alert("Hello " + name);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me </button>
      <button
        onClick={() => {
          handleClickAgain("Mario");
        }}
      >
        Click me Again
      </button>
    </div>
  );
};

export default Home;
