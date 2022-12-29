import styled from "styled-components";

export const SuccessContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    flex-direction: column;
    padding: 0 11%;
  }
`

export const SuccessContainerBody = styled.div`
  display: flex;

  h1 {
    color: ${props => props.theme.brand.yellowDark};
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 0.25rem;
    margin-top: 5rem;
    font-size: 2rem;
  }

  & > p {
    color: ${props => props.theme.base.subtitle};
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }
`

export const OrderInfo = styled.div`
    background: linear-gradient(to right, 
      ${props => props.theme.brand.yellow}, 
      ${props => props.theme.brand.purple});
    border-radius: 6px 36px 6px 36px;
    max-width: 32.875rem;
    border: none;

  & > div {
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.base.background};
    border: 1px solid transparent;
    border-radius: 6px 36px 6px 36px;
    padding: 2.5rem;
    max-width: 32.875rem;
    background-clip: padding-box;
    gap: 2rem;

  }
`