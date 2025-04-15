import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

/* 
  TO-DO:
  Figure out a way to display red border info if it's a hawthorne quest
  Make videos on how to obtain secret chests eventually
  Get more encounter maps for deep stone crypt

*/

import HomePage from "./components/homepage/HomePage";
import UsefulResources from "./components/otherResources/UsefulResources";
import ContactPage from "./components/contactPage/ContactPage";
// important compenent which will list all raids or dungeons dependong on what the user selected
import ActivityHomePage from "./components/dungeonsAndRaids/ActivityHomePage";
// import component which will display information of selected activity
import ActivityPage from "./components/dungeonsAndRaids/components/activityPage/ActivityPage";

import "./App.css";

function App() {
  return (
    <div className="app colors">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Route which will lead users to a single page which will display something different depending on what they chose */}
          <Route
            path="/DungeonAndRaids/:activityName"
            element={<ActivityHomePage />}
          />
          <Route path="/UsefulResources" element={<UsefulResources />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          {/* All dungeons will route to the same page.
              Depending on the id of the dungeon, it will display different information
              based on the dungeon id.
          */}
          <Route
            path="/DungeonAndRaids/:activityType/:activityName"
            element={<ActivityPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
