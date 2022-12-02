import "./App.scss";
import Header from "./components/Generic/Header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import Virtual from "./components/Virtual/Virtual";
import Products from "./components/Products/Products";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Generic/Footer/Footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Amazon</title>
      </Helmet>
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
