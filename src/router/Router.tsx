import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import RubiksCubeMakerPage from "~/components/pages/RubiksCubeMakerPage";

import { ROUTES } from "./constants";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES.RUBIKS_CUBE_MAKER}
          element={<RubiksCubeMakerPage />}
        />
        <Route path="*" element={<Navigate to={ROUTES.RUBIKS_CUBE_MAKER} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
