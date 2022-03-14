import * as S from "./styles";
import Switch from '@material-ui/core/Switch';
import { Setting } from "../../store/reducers/settings/settingsResult.type";
import Accordion from "../Accordion";

type SettingsListProps = {
  items: Setting[];
};

// TODO: change select data
const mountNestedCardItems = (items: SettingsListProps, child = false) => (
  items.map((setting: Setting, index: number) => (
    setting.values ?
      <S.ContentAccordions key={`${setting.label}-${index}`}>
        <Accordion
          key={`${setting.label}-${index}`}
          id={`${setting.label}-${index}`}
          title={setting.label}
        >
          {mountNestedCardItems(setting.values, true)}
        </Accordion>
      </S.ContentAccordions>
      :
      <S.CardItem key={`${setting.label}-${index}`}>
        <S.Info child={child}>
          <S.Label>{setting.label}</S.Label>
          <S.ButtonBox>
            {setting.limit ?
              <select><option>{setting.limit}</option></select>
            : null
            }
            <Switch color="primary" />
          </S.ButtonBox>
        </S.Info>
      </S.CardItem>
)));

const SettingsList = ({ items }: SettingsListProps) => (
  <S.Wrapper data-testid="settings-list">
    {items.map((setting: Setting, index: number) => (
      <S.Content key={`${setting.label}-${index}`}>
        <S.Title>{setting.label}</S.Title>
        {mountNestedCardItems(setting.values)}
      </S.Content>
    ))}
  </S.Wrapper>
);

export default SettingsList;