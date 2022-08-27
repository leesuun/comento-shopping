import styled from "styled-components";

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

interface IPaymentDataProps {
  info: string;
  price: string;
}

function PaymentData({ info, price }: IPaymentDataProps) {
  return (
    <Price>
      <Info>{info}</Info>
      <Data>{price}</Data>
    </Price>
  );
}

export default PaymentData;
