import React from 'react';
import { Divider, Header, Image } from 'semantic-ui-react'
import daiSmall from '../img/Dai126x126.png';
import RateCalculator from './RateCalculator';

const PageHeader = (props) => {
  return (
    <React.Fragment>
      <Header as='h2' icon inverted textAlign='center'>
          <Image src={daiSmall} />
          <div>
          Dai Tools
          </div>
          <Header.Subheader>
          Tools for Smart (Contract) Developers
          </Header.Subheader>
      </Header>
      <Divider />
    </React.Fragment>
  )
}

export default PageHeader
