import { atom } from "recoil";

export const coreState = {
  visibility: atom({
    key: "coreStateHidden",
    default: false,
  }),
  textState: atom({
    key: "textState",
    default: "",
  }),
};
