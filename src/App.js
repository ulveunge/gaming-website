import "./App.scss";

import { About, Contact, Home, News, Services } from "./pages/pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="news" element={<News />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
