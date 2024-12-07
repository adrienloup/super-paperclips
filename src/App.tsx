import { BrowserRouter, Routes, Route } from "react-router-dom";

import Game from "@/game/page/Game";
import Help from "@/help/page/Help";

import "@/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/super-paperclips" element={<Game />} />
        <Route path="/super-paperclips/help" element={<Help />} />
        <Route path="/super-paperclips/*" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
