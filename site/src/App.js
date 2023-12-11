import "./css/style.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/header/header";
import MainImg1 from "./components/main_img1/main_img1";
import MainImg2 from "./components/main-img2/main-img2";
import MainImg3 from "./components/main-img3/main-img3";
import News from "./pages/News";
import ScrollToTop from "./utils/scrolltotop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainImg1 />} />
          <Route path="News" element={<MainImg2 />} />
          <Route path="About" element={<MainImg3 />} />
        </Routes>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="News" element={<News />} />
          <Route path="About" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
