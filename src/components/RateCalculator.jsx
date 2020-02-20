import React, { useState, useEffect } from 'react';
import { Card, Container, Form, Grid, Input } from 'semantic-ui-react';

const RateCalculator = (props) => {
  const [percent, setPercent] = useState(8);
  const [rate, setRate] = useState();

  const updatePercentage = (e, data) => {
    setPercent(data.value);
  }

  const percentageMultiplier = (_pct) => {
    return (percent / 100) + 1;
  }

  const updateRate = (e, data) => {
    setRate(data.value);
  }

  const rateCalculation = () => {
    // TODO math
  }

  useEffect(() => {
    console.log(percent);
  }, [percent, rate]);

  return (
    <Container>
      <Card fluid>
        <Card.Content>
          <Card.Header>Rate Calculator</Card.Header>
        </Card.Content>
        <Card.Content extra>
          (({percentageMultiplier(percent)})^(1/(365*24*60*60)))*10^27
        </Card.Content>
        <Card.Content>

          <Form size='large'>
            <Grid>
              <Grid.Column width={3} offset={1}>
                <Input
                  label="%"
                  labelPosition="right"
                  onChange={updatePercentage}
                  value={percent}
                  fluid />
              </Grid.Column>
              <Grid.Column width={9}>
                <Input
                  fluid
                  label={{ icon: "copy outline "}}
                  labelPosition="right corner"
                  onChange={updateRate}
                  value={rate}
                />
              </Grid.Column>
            </Grid>
          </Form>
        </Card.Content>
      </Card>
    </Container>
  )
}

export default RateCalculator
