import React from "react";
import ReactDOM from "react-dom/client";
import { BowlingBall } from "./BowlingBall";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BowlingBall index={0} />
  </React.StrictMode>
);
