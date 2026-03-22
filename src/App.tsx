import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import BottomNav from "./components/BottomNav";
import DecryptedText from "./components/DecryptedText";
import Dither from "./components/Dither";
import About from "./pages/About";

function Layout() {
  const [paused, setPaused] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [visible, setVisible] = useState(true);
  const [showHome, setShowHome] = useState(isHome);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => {
      setShowHome(isHome);
      setVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, [isHome]);

  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-100">
      <div className="absolute inset-0">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={paused}
          enableMouseInteraction={false}
          colorNum={4}
          waveAmplitude={0.4}
          waveFrequency={4}
          waveSpeed={0.03}
        />
      </div>

      <div
        className={`relative z-10 min-h-screen transition-opacity ease-out ${
          visible ? "opacity-100 duration-1000" : "opacity-0 duration-300"
        }`}
      >
        {showHome ? (
          <header className="flex min-h-screen flex-col items-center justify-center drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
            <h1 className="text-7xl font-bold text-white">
              <DecryptedText
                text="nacal.io"
                animateOn="inViewHover"
                speed={90}
              />
            </h1>
            <p className="mt-1 text-lg tracking-[0.3em] text-gray-200">
              Under development.
            </p>
          </header>
        ) : (
          <>
            <header className="flex flex-col items-center py-6 md:py-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                <DecryptedText
                  text="nacal.io"
                  animateOn="inViewHover"
                  speed={90}
                />
              </h1>
              <p className="mt-0.5 text-[0.5rem] tracking-[0.15em] text-gray-200">
                Under development.
              </p>
            </header>
            <Routes>
              <Route path="/about" element={<About />} />
            </Routes>
          </>
        )}
      </div>

      <BottomNav />

      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? "Play animation" : "Pause animation"}
        className="fixed bottom-6 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900/80 text-gray-300 backdrop-blur transition hover:bg-gray-800"
      >
        {paused ? <Play size={16} /> : <Pause size={16} />}
      </button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
