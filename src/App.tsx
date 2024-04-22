import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./index.css"
import Content from "./components/Content";



function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Header />
      </div>
      <div id="project">
        <Content />
      </div>
      
    </div>
  );
}

export default App;
