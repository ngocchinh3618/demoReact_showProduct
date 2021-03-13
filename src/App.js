import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductList from "./components/ProductList";
import  Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
