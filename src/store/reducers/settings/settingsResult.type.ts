export type SettingsResult = {
  items: Setting[];
};

export type Setting = {
  id?: number;
  label: string;
  selected: boolean;
  limit?: string;
  values?: Setting[];
};
