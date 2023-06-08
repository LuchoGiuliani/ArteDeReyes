import {
  Navbar,
  Hero,
  Telas,
  Description,
  Oleo,
  Murales,
  Footer,
  LoadingPage
} from "./components";

import "./App.css";
import { useState, useEffect } from "react";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingPage onLoad={() => setLoading(false)} />;
  }

  return (
    <div className="App background">
      <a href="#front" className="wsp  hover:scale-110 z-50">
        <img src="/whatsapp.png" alt="" />
      </a>
      <div className="main_container h-full ">
        <Navbar />
        <div className="bg-hero">
        <Hero />
        <Description />
        </div>
      </div>
      <Oleo />
      <Telas />
      <Murales />
      <Footer />
    </div>
  );
}

export default App;
