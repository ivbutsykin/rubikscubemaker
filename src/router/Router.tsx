import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import MakerPage from "~/components/pages/MakerPage";

import { ROUTES } from "./constants";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.ROOT} element={<MakerPage />} />
        <Route path="*" element={<Navigate to={ROUTES.ROOT} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
