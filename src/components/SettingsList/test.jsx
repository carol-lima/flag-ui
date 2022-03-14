import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";
import SettingsList from "./index";

const data = [
    {
      id: 1,
      label: "General",
      selected: false,
      values: [
        {
          label: "Case management",
          selected: false
        }
      ]
    }
  ];

describe("<SettingsList />", () => {
  it("should render the Settings list", () => {
    renderWithTheme(<SettingsList items={data} />);

    expect(screen.queryByTestId("settings-list")).toBeInTheDocument();
  });
});
