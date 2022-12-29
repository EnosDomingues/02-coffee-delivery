import styled from "styled-components";

export const ProductListContainer = styled.div`
  padding: 0 11%;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  margin-bottom: 9.8125rem;
`
export const ProductListHeader = styled.h1`
  padding: 0 11%;
  margin-bottom: 3.375rem;
  margin-top: 2rem;
  font-size: 2rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: bolder;
  color: ${props => props.theme.base.subtitle};
`