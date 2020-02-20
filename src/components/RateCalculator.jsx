import React, { useState, useEffect } from 'react';
import { Card, Container, Form, Grid, Input } from 'semantic-ui-react';
import { create, all } from 'mathjs';

// configure the default type of numbers as BigNumbers
const config = {
  // Default type of number
  // Available options: 'number' (default), 'BigNumber', or 'Fraction'
  number: 'BigNumber',
  // Number of significant digits for BigNumbers
  precision: 45,

}
const math = create(all, config)

const RateCalculator = (props) => {
  const [percent, setPercent] = useState(8);
  const [rate, setRate] = useState();

  // ((1.08)^(1/(365*24*60*60)))*10^27
  const annualExponent = (1/(365*24*60*60)) * Math.pow(10, 27);

  const updatePercentage = (e, data) => {
    setPercent(data.value);
  }

  const percentageMultiplier = (_pct) => {
    return (percent / 100) + 1;
  }

  const updateRate = (e, data) => {
    console.log(data.value)
    setRate(data.value);
  }

  const rateCalculation = () => {
    // TODO Refactor this mess

    // ((1.09)^(1/(365*24*60*60)))*10^27
    let pct = math.bignumber(percentageMultiplier(percent));
    //let pct = new Decimal(percentageMultiplier(percent));
    console.log(pct.toString());
    //let time = (1/(365*24*60*60));
    let time = math.bignumber((1/(365*24*60*60)));
    console.log(time.toString())

    let left = pct.pow(time);
    console.log(left.toString());

    let ten = math.bignumber(10);
    let right = ten.pow(27);
    console.log(right);

    let result = left.times(right);

    // 1000000002440418608258399990
    return result.ceil().toFixed().toString();
  }

  useEffect(() => {
    //console.log(percent);
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
                  className="text-right"
                  value={rateCalculation()}
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
