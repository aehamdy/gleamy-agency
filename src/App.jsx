import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import PageLayout from "./pages/PageLayout";
import AboutSection from './pages/AboutSection';
import ServicesSection from './pages/ServicesSection';
import PortfolioSection from './pages/PortfolioSection';
import LoadingScreen from './components/LoadingScreen';
import ErrorPage from './pages/ErrorPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePageLoadComplete = () => {
    setIsLoading(false);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      errorElement: <ErrorPage />,
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
          path: "/services",
          element: <ServicesSection />
        },
        {
          path: "/portfolio",
          element: <PortfolioSection />
        }
      ]
    },
  ])

  return (
    <>
      <LoadingScreen isVisible={isLoading} onComplete={handlePageLoadComplete} />
      {!isLoading && <RouterProvider router={router} />}
    </>
)
}

export default App;