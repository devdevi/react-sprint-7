import React, {Component} from 'react';
import PropTypes from 'prop-types';

const ForecastItem = ({weekDay}) => (
	<div>{weekDay}
	</div>
	)

ForecastItem.propTypes ={
	weekDay: PropTypes.string,
}

export default ForecastItem;