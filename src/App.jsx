import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import PageLayout from "./pages/PageLayout";

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
      ]
    },
  ])

  return <RouterProvider router={router} />
}

export default App;