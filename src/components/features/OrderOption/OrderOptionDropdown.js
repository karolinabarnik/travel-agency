import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';



const OrderOptionDropdown = ({values, required, currentValue, setOptionValue}) => (
  <select
    className={styles.dropdown}
    value={currentValue}
    onChange={event => setOptionValue(event.currentTarget.value)}
  >
    {required ? '' : (
      <option key='null' value=''>---</option>
    )}
    {values.map(value => (
      <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
    ))}
  </select>
);



OrderOptionDropdown.propTypes = {
  currentValue: PropTypes.string,
  required: PropTypes.bool,
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  name: PropTypes.string,
};
  

export default OrderOptionDropdown;