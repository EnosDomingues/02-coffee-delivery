import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme.base.card};
  width: 40rem;
  border-radius: 6px;

  padding: 2.5rem;

  & > img {
    width: 1.375rem;
    height: 1.375rem;
  }
`

export const PaymentContainerHeader = styled.div`
  display: grid;
  grid-template-columns: 22px 1fr;
  grid-template-rows: 22px 1fr;

  margin-bottom: 2rem;

  & > span {
    margin-left: 0.5rem;
    font-size: 16px;
    color: ${props => props.theme.base.subtitle};
  }

  & > p {
    font-size: 14px;
    margin-left: 0.5rem;
    color: ${props => props.theme.base.text};
  }
`

export const PaymentOptionsContainer = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 3.1875rem;
  width: 35rem;
`

export const PaymentOption = styled.div`
  
  & input[type=radio] {
    display: none;
  }

  input + label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
    padding: 0 1rem;
    height: 100%;

    font-size: 0.75rem;
    cursor: pointer;
    border-radius: 6px;
    
    border: 1px solid ${props => props.theme.base.button};
    background-color: ${props => props.theme.base.button};
    color: ${props => props.theme.base.text};
  }

  input + label:hover {
    background-color: ${props => props.theme.base.hover};
    transition: 0.2s background;
  }

  input:checked + label {
    background-color: ${props => props.theme.brand.purpleLight};
    border: 1px solid ${props => props.theme.brand.purple};
  }

`