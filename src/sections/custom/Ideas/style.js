import styled from "styled-components/macro";
import { Box, Heading, Button, Paragraph } from "~styled";

const Idea = styled(Box)`
  padding-top: 125px;
  position: relative;
  padding-bottom: 70px;
  @media (min-width: 768px) {
    // padding-top: 115px;
    // padding-bottom: 110px;
  }

  @media (min-width: 992px) {
    // padding-top: 185px;
    // padding-bottom: 180px;
  }

  @media (min-width: 1200px) {
    // padding-top: 220px;
  }
`;
Idea.Title = styled(Heading)`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.2068;
  margin-bottom: 21px;
  color: #25373f;
  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 992px) {
    font-size: 28px;
  }
`;
Idea.Subtitle = styled(Heading)`
  color: #60e1cb;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.75;
  margin-bottom: 28px;
`;
Idea.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.875;
  margin-bottom: 10px;
`;

Idea.Button = styled(Button)`
  min-width: 180px;
  height: 56px;
`;
Idea.Button = styled(Button)`
  min-width: 180px;
  height: 56px;
  border-radius: 500px;
  margin-bottom: 20px;
  margin-right: 15px;
  &.btn-1 {
    box-shadow: -12px 12px 50px rgb(253 52 110 / 30%);
  }
  & > btn-2 {
    box-shadow: -12px 12px 50px rgb(96 1 211 / 30%);
  }
`;
Idea.BtnGroup = styled(Box)`
  padding-top: 15px;
  margin-bottom: -20px;

  @media (min-width: 992px) {
    padding-top: 28px;
  }
`;

Idea.Box = styled(Box)``;

export default Idea;
