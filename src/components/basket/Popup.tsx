import styled from "styled-components";

const PopupBox = styled.div`
  width: 240px;
  height: 160px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-weight: bold;
  }
  button {
    padding: 7px 30px;
    border: none;
    border-radius: 5px;
    background-color: #cccccc;
    cursor: pointer;

    &:hover {
      background-color: #727272;
    }
  }
`;

function Popup() {
  return (
    <PopupBox>
      <span>주문되었습니다.</span>
      <button>확인</button>
    </PopupBox>
  );
}

export default Popup;
