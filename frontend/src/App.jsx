import React from "react";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
