import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routelist } from "./routelist";
import Loading from "components/Loading";
import { isAuth } from "tools/isAuth";
import "./appRouter.scss";

const Router: React.FC = () => {
  return (
    <>
      {isAuth() ? (
        <Routes>
          {routelist?.map((item) => {
            return (
              <Route
                key={item.id}
                path={item.path}
                element={
                  <Suspense fallback={<Loading />}>
                    <item.element />
                  </Suspense>
                }
              />
            );
          })}
        </Routes>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Router;
