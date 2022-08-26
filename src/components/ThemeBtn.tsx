import styled from "styled-components";

export const ThemeBtnStyled = styled.button`
  background: rgba(0, 0, 0, 0.5);
  width: fit-content;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  padding: 24px 16px;
  color: white;
`;

interface ThemeBtnProps {
  themeName: string;
}

function ThemeBtn({ themeName }: ThemeBtnProps) {
  return <ThemeBtnStyled>{themeName}</ThemeBtnStyled>;
}

export default ThemeBtn;
