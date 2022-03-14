import React from "react";

import Switch from '@material-ui/core/Switch';
import ExpandLessSharpIcon from "@material-ui/icons/ExpandLessSharp";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";

import * as S from "./styles";

type AccordionProps = {
  id: string;
  icon?: React.ReactSVGElement | React.ReactNode;
  title: string;
  opened?: boolean;
  children: React.ReactNode;
};

export default function Accordion({
  id,
  icon,
  title,
  opened,
  children
}: AccordionProps) {
  const [expanded, setExpanded] = React.useState<string | false>(id);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <S.Accordion
      key={id}
      square
      expanded={expanded === id}
      onChange={handleChange(id)}
      data-testid="accordion"
    >
      <S.AccordionSummary
        aria-controls={`${id}d-content`}
        id={`${id}d-header`}
        data-testid="accordion-summary"
      >
        <S.SummaryTitle>
          <S.IconDescription>
            {icon}
            <h4>{title}</h4>
          </S.IconDescription>
          <S.IconExpand>
            <Switch color="primary" />
            {expanded === id ? (
              <ExpandLessSharpIcon />
            ) : (
              <ExpandMoreSharpIcon />
            )}
          </S.IconExpand>
        </S.SummaryTitle>
      </S.AccordionSummary>
      <S.AccordionDetails data-testid="accordion-details">
        {children}
      </S.AccordionDetails>
    </S.Accordion>
  );
}
