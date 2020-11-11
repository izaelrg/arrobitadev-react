import React from 'react';
import styled from 'styled-components';

const CountryPageStyled = styled.div``


export default function CountryPage({ match }) {
  return (
    <CountryPageStyled>
      {match.params.id}
    </CountryPageStyled>
  )
}
