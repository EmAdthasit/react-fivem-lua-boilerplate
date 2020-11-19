import { useSetRecoilState } from "recoil";
import { useVisibility } from "./useVisibility";
import { coreState } from "./state";
import { useNuiEvent } from "../../nui-events/hooks/useNuiEvent";

export const useCoreService = () => {
  const setShowHide = useSetRecoilState(coreState.visibility);
  const setText = useSetRecoilState(coreState.textState);
  // You can change these strings to whatever you wish :)
  useNuiEvent("REACTNUI", "setVisibility", setShowHide);
  useNuiEvent("REACTNUI", "setText", setText);
  return useVisibility();
};
