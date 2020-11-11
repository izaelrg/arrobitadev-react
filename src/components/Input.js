import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.label`
  display: inline-flex;
  background: white;
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0,0,0,0.5);
  padding: 0 2rem;
  border-radius: 5px;
  flex: 1;
  i {
    margin-right: 1em;
    color: #C4C4C4;
  }
  input {
  height: 48px;
  line-height: 48px;
  font-size: .7em;
  border: none;
  &::webkit-input-placeholder {
    color: #C4C4C4;
    }
  }
`

function Input({ ...props }) {
  return (
    <InputStyled>
      <i className="fas fa-search"></i>
      <input type="text" {...props} />
    </InputStyled>
  )
}

export default Input;