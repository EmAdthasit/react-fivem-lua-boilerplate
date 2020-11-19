import React from "react";
import "./App.css";
import { useNuiService } from "./nui-events/hooks/useNuiService";

// show and hide
import { useVisibility } from "./core/hooks/useVisibility";
import { useCoreService } from "./core/hooks/useCoreService";
import Ambulance from "./components/ambulance";

function App() {
  const { visibility } = useVisibility();
  useNuiService();
  useCoreService();

  return (
    <div
      className="mdt-wrapper"
      style={visibility ? { visibility: "visible",  justifyContent: 'center' } : { visibility: "hidden" }}
    >
      {/** Any types of components goes here. Maybe some routing? */}
      <figure className="ipad">
        <Ambulance />
      </figure>
    </div>
  );
}

export default App;
