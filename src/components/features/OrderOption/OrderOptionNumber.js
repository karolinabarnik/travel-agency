import React from 'react';
import PropTypes from 'prop-types';



const OrderOptionNumber = ({ currentValue, setOptionValue }) => (
  <input type="number" value={currentValue} onChange={e => setOptionValue(e.target.value)} />
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;