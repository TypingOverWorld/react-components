// Based on a component from React docs https://reactjs.org/docs/forms.html

// Returns whether or not water would boil at a specific temperature
// Shows both celsius and fahrenheit values in their respective input fields
// no matter which field the temperature was initially set in

import React from 'react';
import TemperatureInput from './forms/TemperatureInput';
import { toCelsius, toFahrenheit, tryConvert } from '../utils/calculatorUtils';

class BoilingCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    const verdict = parseFloat(temperature) >= 100 ? 'The water would boil.' : 'The water would not boil';

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <p>{ this.state.temperature ? verdict : '' }</p>      
      </div>
    );
  }
}

export default BoilingCalculator;