import styled from "styled-components/macro";
import { Box, Heading, Button, Paragraph } from "~styled";

const Feedback = styled(Box)`
  position: relative;
  /* padding-top: 125px;
  padding-bottom: 70px;
  @media (min-width: 768px) {
    padding-top: 115px;
    padding-bottom: 110px;
  }

  @media (min-width: 992px) {
    padding-top: 185px;
    padding-bottom: 180px;
  }

  @media (min-width: 1200px) {
    padding-top: 220px;
  } */
`;

Feedback.Button = styled(Button)`
  color: #fff;
  border-color: #fd346e;
  background-color: #fd346e;
  box-shadow: 0 20px 20px rgb(253 52 110 / 30%);
  border-radius: 500px;
  &:hover {
    box-shadow: 0 20px 20px rgb(253 52 110 / 0%);
    color: #fff;
  }
`;

Feedback.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.875;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.black};
`;

Feedback.Subtitle = styled(Heading)`
  color: #60e1cb;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.75;
  margin-bottom: 28px;
`;

Feedback.UserName = styled(Heading)`
  color: #262729;
  font-size: 21px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 30px;
  margin-bottom: 5px;
  transition: 0.4s;
`;

export default Feedback;
