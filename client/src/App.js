/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import EpisodeList from "./components/EpisodeList"; // Import EpisodeList component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/episodes" element={<EpisodeList />} />{" "}
        {/* Add route for EpisodeList */}
      </Routes>
    </Router>
  );
}

export default App;
