import styled from "styled-components";

export const ProductContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.base.card};
  width: 16rem;
  height: 19.375rem;
  padding: 7rem 1.25rem 0 1.25rem;


  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  & > h1 {
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${props => props.theme.base.subtitle};
    margin-top: 1rem;
  }

  & > p {
    font-size: 0.875rem;
    color: ${props => props.theme.base.label};
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 2.0625rem;
  }
`

export const ProductImage = styled.img`
  position: absolute;

  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 7.5rem;
  height: 7.5rem;
`

export const ProductTag = styled.span`
  display: flex;
  padding: 0.25rem 0.5rem;
  width: fit-content;

  background-color: ${props => props.theme.brand.yellowLight};
  color: ${props => props.theme.brand.yellowDark};
  border-radius: 100px;
  font-size: 0.625rem;
  font-weight: bold;
`

export const ProductTagContainer = styled.div`
  display: flex;
  gap: 0.25rem;
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

export const ProductContainerFooter = styled.div`
  display: flex;
  align-items: center;
  & > span {
    color: ${props => props.theme.base.text};
    font-size: 0.875rem;
    margin-right: 0.8846rem;

    strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
    }
  }

  & > div {
    padding: 0 0.25rem;
    width: 4.5rem;
    height: 2.375rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 6px;
    
    background-color: ${props => props.theme.base.button};
  }

  & > button {
    line-height: 0;
    border: 0;
    outline: 0;

    padding: 0.5rem;

    height: 2.375rem;
    width: 2.375rem;

    border-radius: 6px;
    margin-left: 0.5rem;

    cursor: pointer;

    background-color: ${props => props.theme.brand.purpleDark};

    &:hover {
      background-color: ${props => props.theme.brand.purple};
      transition: 0.1s background-color;
    }
  }
`