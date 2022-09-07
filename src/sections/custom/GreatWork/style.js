import styled from "styled-components/macro";
import { Box, Heading, Button, Paragraph } from "~styled";

const GreatWork = styled(Box)`
  padding-top: 125px;
  position: relative;
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
  }
`;

GreatWork.Button = styled(Button)`
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

GreatWork.SliderButton = styled(Box)`
  /* margin-top:40px; */
  display: inline-flex;
  justify-content: flex-start;
  margin-bottom: 40px;
  @media (min-width: 992px) {
    margin-top: 40px !important;
    justify-content: flex-end;
  }
  button {
    background-color: transparent;
    border: none;
    min-width: 50px;
    max-width: 50px;
    min-height: 50px;
    max-height: 50px;
    color: #099a97;
    border-radius: 500px;
    background-color: #fff;
    margin: 0 10px;
    transition: 0.4s;
    &:hover {
      box-shadow: 0 4px 4px #067775;
      background-color: #099a97;
      color: #fff;
    }

    &:focus {
      box-shadow: none;
    }
  }
`;

GreatWork.Text = styled(Paragraph)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.875;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.black};
`;

export default GreatWork;
