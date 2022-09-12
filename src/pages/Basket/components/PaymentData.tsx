import styled from "styled-components";
import { IPaymentDataProps } from "interface/interface";

const Price = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.span`
  line-height: 1.5;
  font-size: 13px;
  opacity: 0.8;
`;
const Data = styled.span`
  line-height: 1.5;
`;

function PaymentData({ info, price }: IPaymentDataProps) {
  return (
    <Price>
      <Info>{info}</Info>
      <Data>{price}</Data>
    </Price>
  );
}

export default PaymentData;
