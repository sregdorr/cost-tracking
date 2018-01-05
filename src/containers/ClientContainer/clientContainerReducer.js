import { SELECT_CLIENT } from "./clientContainerActions";

const initialState = {
  selectedClient: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
  case SELECT_CLIENT:
    return {
      ...state,
      selectedClient: action.client,
    };
  default:
    return state;
  }
}