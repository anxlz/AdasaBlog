import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Details from "./pages/Details";
import Else from "./pages/Else";
import Layout from "./components/Layout";
import About from "./pages/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Else />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/blog/:id",
          element: <Details />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "*",
          element: <Else />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
