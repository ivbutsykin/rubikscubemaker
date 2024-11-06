import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import BaseTemplate from "~/components/templates/BaseTemplate";
import RubiksCubeMakerPage from "~/components/pages/RubiksCubeMakerPage";

import { ROUTES } from "./constants";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseTemplate />}>
          <Route path={ROUTES.ROOT} element={<RubiksCubeMakerPage />} />
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.ROOT} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
