import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "https://google.co.ke";
  return (
    <div classname="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
