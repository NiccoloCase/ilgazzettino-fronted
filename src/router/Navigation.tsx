import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { HomePage } from "../pages/Home";
import { NotFoundPage } from "../pages/NotFoundPage";
import { Layout } from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export const Navigation = () => {
  return <RouterProvider router={router} />;
};
