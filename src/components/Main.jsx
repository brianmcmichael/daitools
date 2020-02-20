import React from 'react';
import { Container } from 'semantic-ui-react'
import PageHeader from './PageHeader';
import RateCalculator from './RateCalculator';


const Main = (props) => {
  return (
    <Container>
        <PageHeader />
        <RateCalculator />
    </Container>
  )
}

export default Main
