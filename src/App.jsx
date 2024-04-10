import Hero from "./components/Hero/Hero";
import Intuitive_interface from "./components/Intuitive_interface/Intuitive_interface";
import Asked from "./components/asked/Asked";
import Card_section from "./components/card_section/card_section";
import Logo_page from "./components/logo_page/Logo_page";
import Message from "./components/message/Message";

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
      <div className="w-full mt-6 h-full bg-gradient-to-b from-black via-purple-800 border top-36 border-black">
        <Intuitive_interface />
        <Asked />
      </div>
      <Message />
    </div>
  );
}

export default App;
