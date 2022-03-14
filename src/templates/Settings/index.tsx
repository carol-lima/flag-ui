import { useSelector } from "react-redux";
import SettingsList from "../../components/SettingsList";
import { RootState } from "../../store/types";

import * as S from "./styles";

const Settings = () => {
  const data = useSelector((state: RootState) => state.settings);
  const { items } = data || [];

  return (
    <S.Wrapper>
      <SettingsList items={items} />
    </S.Wrapper>)
}

export default Settings;
