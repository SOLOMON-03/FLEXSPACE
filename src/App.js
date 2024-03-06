import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Pricing } from "./Pages/Pricing";
import { Location } from "./Pages/Location";
import { Home } from "./Pages/Home";
import { Header } from "./Components/Header";
import { SignIn } from "./Pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
