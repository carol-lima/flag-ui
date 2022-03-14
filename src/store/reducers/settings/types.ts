import { SettingsResult } from "./settingsResult.type";

export type SettingsPayload = {
  settings: SettingsResult;
};

export type SettingsActions = {
  type: string;
  payload: SettingsPayload;
};
