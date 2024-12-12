 import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";

 const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar /><LandingPage /><Footer /></>
    }
 ]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
