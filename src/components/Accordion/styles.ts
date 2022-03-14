import styled from "styled-components";

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

export const Accordion = styled(MuiAccordion)`
  box-shadow: none;
  color: ${(props) => props.theme.colors.gray[100]} !important;
  border-color: ${(props) => props.theme.colors.status.disabled};
  background: ${(props) => props.theme.colors.gray[800]} !important;
  border-radius: ${(props) => props.theme.border.radius};
  padding: 0.3rem 1.5rem;
  width: 440px;
  font-size: 12px;

  ::before {
    display: none;
  }
`;

export const AccordionSummary = styled(MuiAccordionSummary)`
  border: none !important;
`;

export const SummaryTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const IconDescription = styled.div`
  display: flex;
  align-items: center;
`;

export const IconExpand = styled.div`
  display: flex;
  align-items: center;
`;

export const AccordionDetails = styled(MuiAccordionDetails)`
  display: flex;
  flex-direction: column;
`;
