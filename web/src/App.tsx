import React from "react";
import "./App.css";
import { useNuiService } from "./nui-events/hooks/useNuiService";

// show and hide
import { useVisibility } from "./core/hooks/useVisibility";
import { useCoreService } from "./core/hooks/useCoreService";

// material\
import { Container } from "@material-ui/core";

function App() {
  const { visibility } = useVisibility();
  useNuiService();
  useCoreService();
  return (
    <div
      style={visibility ? { visibility: "visible" } : { visibility: "hidden" }}
    >
      {/** Any types of components goes here. Maybe some routing? */}
      <Container maxWidth="sm">
        <h1>Hello World</h1>
      </Container>
    </div>
  );
}

export default App;
