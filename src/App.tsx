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
import DungeonAndRaidHomePage from "./components/dungeonsAndRaids/DungeonAndRaidHomePage";
import DungeonHomePage from "./components/dungeonsAndRaids/DungeonHomePage";
// Import component which will be a general one for all dungeons
import DungeonPage from "./components/dungeonsAndRaids/components/dungeonPage/DungeonPage";

import "./App.css";

function App() {
  return (
    <div className="app colors">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/DungeonAndRaids/:activityName"
            element={<DungeonAndRaidHomePage />}
          />
          <Route path="/Home/UsefulResources" element={<UsefulResources />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/DungeonHomePage" element={<DungeonHomePage />} />
          {/* All dungeons will route to the same page.
              Depending on the id of the dungeon, it will display different information
              based on the dungeon id.
          */}
          <Route
            path="/DungeonHomePage/:dungeonName"
            element={<DungeonPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
