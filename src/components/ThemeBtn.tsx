import { ThemeBtnStyled } from "../css/components/themeBtn";

interface ThemeBtnProps {
  themeName: string;
}

function ThemeBtn({ themeName }: ThemeBtnProps) {
  return <ThemeBtnStyled>{themeName}</ThemeBtnStyled>;
}

export default ThemeBtn;
