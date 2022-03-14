import Settings from "../../templates/Settings";

import { getSettings  } from "../../services/settingsService";
import { SettingsResult } from "../../store/reducers/settings/settingsResult.type";
import { useDispatch } from "react-redux";
import { settingsResultUpdate } from "../../store/actions/settings";

type SettingsProps = {
  settings: SettingsResult;
};

export async function getServerSideProps(): Promise<any> {
  try {
    const response: SettingsResult = await getSettings();

    return {
      props: {
        settings: response
      }
    }
  } catch (error) {
    console.log(error);
  }
}

// Page calls the template to mount multiple components
export default function Index(props: SettingsProps) {
  const dispatch = useDispatch();

  dispatch(settingsResultUpdate(props.settings));

  return <Settings />;
}