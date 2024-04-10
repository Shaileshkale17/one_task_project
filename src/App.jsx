import Hero from "./components/Hero/Hero";
import Card_section from "./components/card_section/card_section";
import Logo_page from "./components/logo_page/Logo_page";

import Navber_2 from "./components/navber/Navber_2";
import StackBar from "./components/stack_bar/stackBar";

function App() {
  return (
    <div className="bg-black w-full h-full">
      <StackBar />
      <Navber_2 />
      <Hero />
      <Logo_page />
      <Card_section />
    </div>
  );
}

export default App;
