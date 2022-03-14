import { SETTINGS_UPDATE } from "..";
import { SettingsResult } from "../../reducers/settings/settingsResult.type";

export const settingsResultUpdate = (settings: SettingsResult) => ({
  type: SETTINGS_UPDATE,
  payload: settings,
});
