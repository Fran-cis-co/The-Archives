import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import Router from "./components/Router";

import HomePage from "./components/homepage/HomePage";
import UsefulResources from "./components/otherResources/UsefulResources";
// import NotFoundPage from "./components/NotFoundPage";
import ContactPage from "./components/contactPage/ContactPage";
import DungeonHomePage from "./components/dungeons/DungeonHomePage";

// Have all export components for the dungeon pages in a different js file for cleaner code and import here
import {
  ShatteredThrone,
  SunderedDoctrine,
  PitOfHeresy,
  Prophecy,
  GraspOfAvarice,
  DualityDungeon,
  SpireOfTheWatcher,
  GhostsOfTheDeep,
  WarlodsRuin,
  VespersHost,
} from "./data/DungeonPageExports";

import "./App.css";

function App() {
  return (
    <div className="app colors">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/UsefulResources" element={<UsefulResources />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/DungeonHomePage" element={<DungeonHomePage />} />
          {/* --- All dungeon routes --- */}
          <Route
            path="/DungeonHomePage/Shattered_Throne"
            element={<ShatteredThrone />}
          />
          <Route
            path="/DungeonHomePage/Sundered_Doctrine"
            element={<SunderedDoctrine />}
          />
          <Route
            path="/DungeonHomePage/Pit_of_Heresy"
            element={<PitOfHeresy />}
          />
          <Route path="/DungeonHomePage/Prophecy" element={<Prophecy />} />
          <Route
            path="/DungeonHomePage/Grasp_of_Avarice"
            element={<GraspOfAvarice />}
          />
          <Route
            path="/DungeonHomePage/Duality_dungeon"
            element={<DualityDungeon />}
          />
          <Route
            path="/DungeonHomePage/Spire_of_the_Watcher"
            element={<SpireOfTheWatcher />}
          />
          <Route
            path="/DungeonHomePage/Ghosts_of_the_Deep"
            element={<GhostsOfTheDeep />}
          />
          <Route
            path="/DungeonHomePage/Warlords_Ruin"
            element={<WarlodsRuin />}
          />
          <Route
            path="/DungeonHomePage/Vespers_Host"
            element={<VespersHost />}
          />

          {/* --- All raid routes --- */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
