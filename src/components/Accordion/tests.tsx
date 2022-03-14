import { screen, fireEvent } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import Accordion from ".";

const descriptionIcon = (
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#DFF6F8" />
    <path
      d="M10 18.96a.985.985 0 01-.37-1.37l1.5-2.59c.11-.2.28-.34.47-.42l7.83-4.4c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.19.1.35.26.44.46l1.45 2.52c.28.48.11 1.09-.36 1.36l-1 .58v4.96c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44a.991.991 0 01-.53-.88v-5.54c-.3.17-.68.18-1 0zm10-6.81v6.7l5.96-3.35L20 12.15zm-7 11.76l6 3.38v-6.71l-6-3.37v6.7zm14 0v-3.22l-5 2.9c-.33.18-.7.17-1 .01v3.69l6-3.38zm-5.15-2.55l6.28-3.63-.58-1.01-6.28 3.63.58 1.01z"
      fill="#00A3B4"
    />
  </svg>
);

describe("<Accordion />", () => {
  it("should render the Accordion", () => {
    renderWithTheme(
      <Accordion id="panel1" icon={descriptionIcon} title="Description">
        <div>Description</div>
      </Accordion>
    );

    expect(screen.queryByTestId("accordion")).toBeInTheDocument();
  });

  it("should render the Accordion opened when is opened", () => {
    renderWithTheme(
      <Accordion
        id="panel1"
        icon={descriptionIcon}
        title="Description"
        opened
      >
        <div>Description</div>
      </Accordion>
    );

    expect(screen.queryByTestId("accordion-details")).toHaveTextContent(
      "Description"
    );
  });

  it("should render the content when click Accordion", () => {
    renderWithTheme(
      <Accordion id="panel1" icon={descriptionIcon} title="Details">
        <div>Details</div>
      </Accordion>
    );

    const button = screen.queryByTestId("accordion-summary");

    if (button) {
      fireEvent.click(button);
    }

    expect(screen.queryByTestId("accordion-details")).toContainHTML(
      "<div>Details</div>"
    );
  });
});
