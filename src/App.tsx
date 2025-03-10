import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import HomePage from "./components/HomePage";
import UsefulResources from "./components/otherResources/UsefulResources";
import NotFoundPage from "./components/NotFoundPage";

// React router to route all the pages for a seamless experience
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/UsefulResources",
    element: <UsefulResources />,
  },
]);

import "./App.css";
/*
  TO-DO: 
*/

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/UsefulResources" element={<UsefulResources />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
