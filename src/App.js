import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Mainlayout from "./layouts/Mainlayout";

// import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/create", element: <Create /> },
      { path: "/details/:id", element: <Details /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
