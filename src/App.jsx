import { useState, useCallback } from "react";
import Navbar   from "./components/Navbar";
import Footer   from "./components/Footer";
import Intro    from "./components/Intro";
import Home     from "./pages/Home";
import About    from "./pages/About";
import Programs from "./pages/Programs";
import Contact  from "./pages/Contact";

export default function App() {
  const [page, setPage]           = useState("home");
  const [showIntro, setShowIntro] = useState(true);

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleIntroDone = useCallback(() => setShowIntro(false), []);

  const renderPage = () => {
    switch (page) {
      case "about":    return <About    navigate={navigate} />;
      case "programs": return <Programs navigate={navigate} />;
      case "contact":  return <Contact  navigate={navigate} />;
      default:         return <Home     navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-bg-main text-off-white font-rajdhani">
      {showIntro && <Intro onDone={handleIntroDone} />}
      <Navbar page={page} navigate={navigate} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  );
}