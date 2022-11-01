import Info from "./components/info/Info";
import "./App.css";
import About from "./components/about/About";
import Interest from "./components/interests/Interest";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Info />
      <div className="dark">
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}

export default App;
