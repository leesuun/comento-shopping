import { Link } from "react-router-dom";
import styled from "styled-components";
import Popup from "../../pages/Basket/components/Popup";

const OverlayBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Overlay() {
  return (
    <OverlayBox>
      <Link to="/">
        <Popup />
      </Link>
    </OverlayBox>
  );
}

export default Overlay;
