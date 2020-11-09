import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Country from './Country';
import { useSelector, useDispatch } from 'react-redux';

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background: var(--background);
  justify-content: center;
  padding: 4em 2em;
`

function CountryList() {
  const dispatch = useDispatch()
  const countryList = useSelector(state => state.countryList)
  console.log('estado total de app', countryList)
  // const [countryList, setCountryList] = useState([])
  useEffect(()=> {
    fetch('http://restcountries.eu/rest/v2/all')
    .then((response)=> {
      return response.json()
    })
    .then((list) => {
      dispatch({
        type: 'SET_COUNTRY_LIST',
        payload: list
      })
      // setCountryList(data)
      console.log(list.length)
    })
    .catch(()=> {
      console.log('Hubo de error')
    })
  }, [])
  return (
    <CountryListStyled>
      {
        countryList.map(({ flag, name, population, region, capital }) => {
          return(
          <Country 
            key={name}
            flag={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
          )
        })
      }
      </CountryListStyled>
  )
}

export default CountryList;
