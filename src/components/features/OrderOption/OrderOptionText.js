import React from 'react';
import PropTypes from 'prop-types';


const OrderOptionText = ({ currentValue, setOptionValue }) => (
  <input type="text" value={currentValue} onChange={e => setOptionValue(e.target.value)} />
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;