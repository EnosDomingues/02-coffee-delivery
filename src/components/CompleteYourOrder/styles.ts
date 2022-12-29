import styled from "styled-components";

export const CompleteYourOrderContainer = styled.div`
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

export const DeliveryAddressContainer = styled.div`
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

export const DeliveryAddressContainerHeader = styled.div`
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

export const DeliveryAddressContainerForm = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  grid-template-rows: repeat(4, 2.625rem);
  grid-template-areas: 
    "a a a"
    "b b b"
    "c d d"
    "e f g";
  
  & > div[id=CEP] {
    grid-area: a;
    width: 12.5rem;
  }

  & > div[id=address] {
    grid-area: b;
  }

  & > div[id=number] {
    grid-area: c;
  }

  & > div[id=complement] {
    grid-area: d;
  }

  & > div[id=district] {
    grid-area: e;
  }

  & > div[id=city] {
    grid-area: f;
  }

  & > div[id=uf] {
    grid-area: g;
  }
`