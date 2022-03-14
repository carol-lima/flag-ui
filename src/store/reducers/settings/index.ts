import { HYDRATE } from "next-redux-wrapper";

import { SETTINGS_UPDATE } from "../../actions";

import { SettingsActions } from "./types";

import { initialState } from "./settingsInitialState";

const reducer = (state = initialState, action: SettingsActions) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.settings };
    case SETTINGS_UPDATE: {
      const newState = { ...state, ...action.payload };
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
