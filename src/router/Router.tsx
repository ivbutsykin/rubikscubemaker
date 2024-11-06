import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import BaseTemplate from "~/components/templates/BaseTemplate";
import MakerPage from "~/components/pages/MakerPage";

import { ROUTES } from "./constants";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseTemplate />}>
          <Route path={ROUTES.ROOT} element={<MakerPage />} />
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.ROOT} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
