import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./routes";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.Contact} element={<Contact />} />
        <Route path={routes.Favs} element={<Favs />} />
        <Route path={routes.Home} element={<Home />} />
        <Route path={routes.Details} element={<Detail />} />
      </Routes>
      <Navbar />

      <Footer />
    </div>
  );
}

export default App;
