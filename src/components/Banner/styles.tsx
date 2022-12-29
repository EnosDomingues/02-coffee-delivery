import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;

  & > img {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  } 
`

export const BannerContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 34rem;
  gap: 3.5rem;

  padding: 0 11%;
`

export const LeftContentBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 36.75rem;

  & > h1 {
    color: ${props => props.theme.base.title};
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
  }

  & > span {
    font-size: 1.25rem;
    margin: 1rem 0 2.875rem;
  }

  & > section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);

    & > div {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-top: 1.25rem;
    }

  }
`