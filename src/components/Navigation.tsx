import { Nav, NavWraaper } from "../css/components/navigation";
import { GrayLine } from "../css/pages/home";

function Navigation() {
  return (
    <NavWraaper>
      <Nav>코멘토 쇼핑</Nav>
      <GrayLine style={{ height: "2px", marginTop: "20px" }} />
    </NavWraaper>
  );
}

export default Navigation;
