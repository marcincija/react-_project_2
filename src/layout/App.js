import Header from "../components/Header";
import Slider from "../components/Slider";
import Specialist from "../components/Specialist";
import Offer from "../components/Offer";
import Footer from "../components/Footer";
import "../styles/App.css";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Slider />
        <Specialist />
        <Offer />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
