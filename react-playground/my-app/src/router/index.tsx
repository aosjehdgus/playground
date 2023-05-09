import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Main = lazy(() => import("../pages/Main"));
const Map = lazy(() => import("../pages/Map"));

export const Router = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="/map" index element={<Map />} />
      </Routes>
    </Suspense>
  );
};
