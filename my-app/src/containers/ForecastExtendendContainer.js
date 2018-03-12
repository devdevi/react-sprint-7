import React, { Component } from 'react';
import { connect } from 'react-redux'; //sirve para conectar mis componentes de React con Redux
import ForecastExtended from './../components/ForecastExtendend';
import PropTypes from 'prop-types';

class ForecastExtendedContainer extends Component {
  render() {
    return (
      this.props.city &&
      <ForecastExtended city={this.props.city}></ForecastExtended>
    )
  }
}

const mapStateToProps = ({ city }) => (
  console.log(`Este es el valor de mapStateToProps ${city}`), { city }
);

ForecastExtended.propTypes ={
	City:PropTypes.string,
}

export default connect(mapStateToProps, null)(ForecastExtendedContainer);