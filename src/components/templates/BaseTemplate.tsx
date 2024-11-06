import { Outlet } from "react-router-dom";

import Header from "../organisms/Header";

function BaseTemplate() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default BaseTemplate;
