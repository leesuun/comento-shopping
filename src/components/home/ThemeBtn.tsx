import styled, { keyframes } from "styled-components";
import { ThemeBtnProps } from "../../interface/interface";

const opacity = keyframes`
  100% {
    opacity: 1;
  }
`;

const ThemeBtnStyled = styled.button`
  background: rgba(0, 0, 0, 0.5);
  width: fit-content;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  padding: 24px 16px;
  color: white;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    animation: ${opacity} 0.5s forwards;
  }
`;

function ThemeBtn({ themeName, onClick, type }: ThemeBtnProps) {
  return (
    <ThemeBtnStyled onClick={() => onClick(type)}>{themeName}</ThemeBtnStyled>
  );
}

export default ThemeBtn;
