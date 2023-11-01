import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Pricing } from "./pages/pricing";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";




function App() {
  return (
    <>
          <Routes>
            {/* home */}
            <Route path="/" element={<Home />} />
            {/* pricing */}
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/pricing/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
    </>
  );
}

export default App;
