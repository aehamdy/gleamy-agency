import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import PageLayout from "./pages/PageLayout";
import AboutSection from './pages/AboutSection';
import ServicesSection from './pages/ServicesSection';

function App() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavVisibility = () => {
    setIsNavExpanded(prevValue => !prevValue);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout isNavExpanded={isNavExpanded} handleNavVisibility={handleNavVisibility} />,
      children: [
        {
          path: "/",
          element: <LandingPage />
        },
        {
          path: "/about",
          element: <AboutSection />
        },
        {
          path: "services",
          element: <ServicesSection />
        }
      ]
    },
  ])

  return <RouterProvider router={router} />
}

export default App;