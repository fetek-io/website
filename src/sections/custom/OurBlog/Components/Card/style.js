import styled from "styled-components/macro";
import { Box, Heading, Paragraph } from "~styled";

import { transparentize, rgba } from "polished";

const propToColor = (arg = "#1787FC") => transparentize(0.7, arg);

const Card = styled(Box).attrs({ className: "card" })`
  border-radius: 8px !important;
  background-color: #ffffff;
  padding-top: 40px;
  padding-left: 45px;
  padding-right: 35px;
  padding-bottom: 28px;
  /* margin-bottom: 24px; */
  transition: 0.4s;
  /* width: 100%;
  height: 100%; */
  border-color: transparent;
  /* border-top: 8px solid ${(props) => props.theme.colors.primary}; */
  display: inline-flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  /* &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  } */
  margin: 0 20px;
`;
Card.Icon = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  max-width: 48px;
  min-height: 48px;
  max-height: 48px;
  border-radius: 10px;
  margin-bottom: 30px;
  font-size: 16px;
  background: ${(props) => rgba(props.iconBackground, 0.2)};
  color: ${(props) => props.iconBackground};
`;
Card.Title = styled(Heading)`
  color: #262729;
  font-size: 21px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 30px;
  margin-bottom: 5px;
  transition: 0.4s;
`;
Card.Text = styled(Paragraph)`
  opacity: 0.7;
  color: #262729;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 28px;
  align-self: self-start;
  margin-top: auto;
  margin-bottom: 0;
`;
Card.Link = styled(Paragraph)`
  opacity: 0.7;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 15px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 28px;
  align-self: self-start;
  margin-top: auto;
  margin-bottom: 0;
`;

export default Card;
