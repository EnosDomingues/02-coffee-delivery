import styled from "styled-components";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;


  & > b {
    margin-bottom: 0.9375rem;
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${props => props.theme.base.subtitle}
  }
`

export const SelectedCoffeesListContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme.base.card};
  width: 28rem;
  border-radius: 6px 44px 6px 44px;

  padding: 2.5rem;

  & > img {
    width: 1.375rem;
    height: 1.375rem;
  }
`

export const UpdateProductButton = styled.button`
  line-height: 0;
  border: none;
  outline: none;

  background-color: transparent;
  cursor: pointer;

  margin: 0 0.25rem;

  &:hover svg path {
    fill: ${props => props.theme.brand.purpleDark};
  }
`

export const ConfirmOrderButton = styled.button`
  border: none;
  outline: none;
  height: 2.875rem;
  border-radius: 6px;
  cursor: pointer;
  color: ${props => props.theme.base.white};
  font-size: 0.875rem;
  font-weight: bold;
  background: ${props => props.theme.brand.yellow};
  margin-top: 1.5rem;

  &:hover {
    background: ${props => props.theme.brand.yellowDark};
    transition: 0.2s background;
  }
`

export const OrderSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: 
    "a b"
    "c d"
    "e f"
  ;

  gap: 0.7rem;

  & p[id=total-items] {
    grid-area: a;
    color: ${props => props.theme.base.text};
    font-size: 0.875rem;
    line-height: 1.3;
  }

  & p[id=total-items-value] {
    grid-area: b;
    text-align: end;
    color: ${props => props.theme.base.text};
    line-height: 1.3;
  }


  & p[id=delivery] {
    grid-area: c;
    color: ${props => props.theme.base.text};
    font-size: 0.875rem;
    line-height: 1.3;
  }

  & p[id=delivery-value] {
    grid-area: d;
    text-align: end;
    color: ${props => props.theme.base.text};
    line-height: 1.3;
  }

  & b[id=total] {
    grid-area: e;
    color: ${props => props.theme.base.subtitle};
    font-size: 1.25rem;
    line-height: 1.3;
  }

  & b[id=total-value] {
    grid-area: f;
    text-align: end;
    color: ${props => props.theme.base.subtitle};
    font-size: 1.25rem;
    line-height: 1.3;
  }
`

export const ProductContainer = styled.div`
  display: flex;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.base.button};

  img {
    width: 4rem;
    height: 4rem;
  }

  b {
    width: 100%;
    color: ${props => props.theme.base.text};
    line-height: 1.3;
    display: flex;
    flex-direction: row-reverse;
  }

  & > div {
    display: flex;
    flex-direction: column;
    margin-left: 1.25rem;
  }

  & > div > div {
    display: flex;
  }

  & > div > div > button img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
    margin-left: 0.5rem;
  }

  & > div > div > button {
    line-height: 0;
    outline: 0;
    border: 0;
    cursor: pointer;
    background-color: ${props => props.theme.base.button};
    border-radius: 6px;
    color: ${props => props.theme.base.text};
    font-size: 0.75rem;
    margin-left: 0.5rem;
    padding-right: 0.5rem;
    line-height: 1.6;
    display: flex;
    align-items: center;

    &:hover {
      background-color: ${props => props.theme.base.hover};
      transition: background 0.2s;
    }

  }

  & > div p {
    margin-bottom: 0.5rem;
    color: ${props => props.theme.base.subtitle};
  }

  & > div > div > div {
    padding: 0 0.25rem;
    width: 4.5rem;
    height: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 6px;
    
    background-color: ${props => props.theme.base.button};
  }

  & + div {
    margin-top: 1.5rem;
  }
`