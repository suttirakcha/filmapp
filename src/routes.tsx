import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SearchPage from "./pages/SearchPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Home />,
        errorElement:<Error />
    },
    {
        path: "/search",
        element:<SearchPage />,
        errorElement:<Error />
    }
])