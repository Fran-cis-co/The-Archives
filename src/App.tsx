import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import HomePage from "./components/homepage/HomePage";
import UsefulResources from "./components/otherResources/UsefulResources";
// import NotFoundPage from "./components/NotFoundPage";
import ContactPage from "./components/contactPage/ContactPage";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
