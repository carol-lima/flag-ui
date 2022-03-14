import styled from "styled-components";

type CardItemProps = {
  child?: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  padding: 3rem;
  flex-wrap: wrap;
  text-transform: uppercase;
  ${(props) => props.theme.font.family.industry};
`;

export const Content = styled.div`
  margin-left: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: 4rem;
`;

export const CardItem = styled.div`
  padding: 0.5rem 1rem;
`;

export const ContentAccordions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Title = styled.h4`
  color: ${(props) => props.theme.colors.gray[50]};
  font-size: 14px;
  line-height: 18px;
  width: 100%;
  margin: 0 0 0 1rem;
`;

export const Info = styled.div<CardItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${(props) => props.theme.border.radius};
  background: ${(props) => props.theme.colors.gray[800]};
  padding: ${(props) => (props.child ? "0" : "1.5rem 1.5rem 1.5rem 3rem")};
  color: ${(props) => props.theme.colors.gray[100]};
  min-width: ${(props) => (props.child ? "380px" : "440px")};
  font-weight: ${(props) => props.theme.font.medium};

  select {
    min-width: 60px;
    padding: 0.2rem 0.5rem;
    background: ${(props) => props.theme.colors.gray[900]};
    border: none;
    color: ${(props) => props.theme.colors.gray[50]};
    border-radius: ${(props) => props.theme.border.radius};
    font-weight: 600;
  }
`;

export const Label = styled.span`
  font-size: 12px;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
`;
