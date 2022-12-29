import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6.5rem;
  padding: 0 11%;

  background-color: ${props => props.theme.base.background};
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    gap: 0.75rem;
  }
`

export const LocationContainer = styled.div`
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${props => props.theme.brand.purpleLight};
  color: ${props => props.theme.brand.purpleDark};

  display: flex;
  align-items: center;

  img {
    margin-right: 0.25rem;
  }
`

export const CartContainer = styled.button`
  position: relative;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${props => props.theme.brand.yellowLight};
  border: 0;
  outline: 0;
  cursor: pointer;
  display: flex;
`

export const CartProductCounter = styled.div`
  border-radius: 50%;
  background-color: ${props => props.theme.brand.yellowDark};
  color: ${props => props.theme.base.white};
  font-weight: bold;
  font-size: 0.75rem;
  width: 1.25rem;
  height: 1.25rem;
  line-height: 130;

  position: absolute;
  top: 0;
  right: 0;
  transform: translate(45%, -45%);

  display: flex;
  align-items: center;
  justify-content: center;
`