import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Layout from "./Layout";
import ProtectRoute from "./components/ProtectRoute.jsx";
import { About, Contact, Dashboard, Login } from "./components/Index.jsx";
import HomeLayout from "./HomeLayout.jsx";

export const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Login />} />
      <Route
        path="dashboard/"
        element={<ProtectRoute Component={HomeLayout} />}
      >
        <Route path="home" element={<Dashboard />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route
        path="*"
        element={
          <div>
            <h1>Not Found</h1>
          </div>
        }
      />
    </Route>
  )
);
