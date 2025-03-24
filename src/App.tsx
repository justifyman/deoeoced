import { FC } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
