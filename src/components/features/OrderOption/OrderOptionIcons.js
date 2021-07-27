import React from 'react';
import styles from '/OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';


const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div
    className={styles.icon}
    value={currentValue}
    onClick={event => setOptionValue(event.id)}
  >
    {required ? '' : (
      <option key='null' value=''>---</option>
    )}
    {values.map(value => (
      <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  name: PropTypes.string,
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;