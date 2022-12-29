import styled from "styled-components";

export const InputTextContianer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.base.button};
  border-radius: 4px;
  background-color: ${props => props.theme.base.input};
  color: ${props => props.theme.base.text};

  cursor: text;

  & > span {
    font-size: 0.75rem;
    font-style: italic;
    color: ${props => props.theme.base.label};

    margin-right: 0.75rem;
  }


  &:focus-within {
    outline: none;
    border: 1px solid ${props => props.theme.brand.yellowDark};
  }
`

export const StyledInputText = styled.input`
  border: none;
  border-radius: 4px;
  background-color: transparent;
  color: ${props => props.theme.base.text};
  outline: none;
  width: 100%;

  font-size: 0.875rem;

  padding: 0.75rem;

  &::placeholder {
    color: ${props => props.theme.base.label};
    font-size: 0.875rem;
  }

`