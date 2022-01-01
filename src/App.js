import React, { Fragment } from "react";
import { Navigation } from "./pages/navigation/Navigation";
import { Posts } from "./pages/posts/Posts";

function App() {
  return (
    <Fragment>
      <Navigation />

      <Posts />
      <Posts />
      <Posts />
    </Fragment>
  );
}

export default App;
