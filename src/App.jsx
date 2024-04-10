import Hero from "./components/Hero/Hero";

import Navber_2 from "./components/navber/Navber_2";
import StackBar from "./components/stack_bar/stackBar";

function App() {
  return (
    <div className="bg-black w-full h-screen">
      <StackBar />
      <Navber_2 />
      <Hero />
    </div>
  );
}

export default App;
