import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Pricing } from "./Pages/Pricing";
import { Location } from "./Pages/Location";
import { Home } from "./Pages/Home";
import { Header } from "./Components/Header";
import { SignIn } from "./Pages/SignIn";
import { Footer } from "./Components/Footer";
import { About } from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
