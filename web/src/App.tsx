import React from "react";
import "./App.css";
import { useNuiService } from "./nui-events/hooks/useNuiService";

// show and hide
import { useVisibility } from "./core/hooks/useVisibility";
import { useCoreService } from "./core/hooks/useCoreService";
import Ambulance from "./components/ambulance";
import { useRecoilState, useSetRecoilState } from "recoil";
import { coreState } from "./core/hooks/state";
import Button from "@material-ui/core/Button";
import Nui from "./nui-events/utils/Nui";

function App() {
  const { visibility } = useVisibility();
  useNuiService();
  useCoreService();

  const [text, setText] = useRecoilState(coreState.textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onClick = () => {
    Nui.send('Close')
  };

  return (
    <div
      className="mdt-wrapper"
      style={
        visibility
          ? { visibility: "visible", justifyContent: "center" }
          : { visibility: "hidden" }
      }
    >
      {/** Any types of components goes here. Maybe some routing? */}
      <figure className="ipad">
        {/* <Ambulance /> */}
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
        <Button onClick={onClick} variant="contained" color="primary">
          Close
        </Button>
      </figure>
    </div>
  );
}

export default App;
