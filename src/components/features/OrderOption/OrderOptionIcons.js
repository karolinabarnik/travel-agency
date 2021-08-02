import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from './../../common/Icon/Icon';


const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div
    className={styles.icon}
  >
    {required ? '' : (
      <div key='null' onClick={() => setOptionValue('')} >---</div>
    )}
    {values.map(value => (
      <div 
        className={styles.icon + ((value.id === currentValue) ? ' ' + styles.iconActive : '')} 
        key={value.id}
        onClick={() => setOptionValue(value.id)}>
        <Icon name={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>
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