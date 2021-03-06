import React from 'react';
import PropTypes from 'prop-types';
import styles from './../OrderOption/OrderOption.scss';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionDate from './OrderOptionDate';
import OrderOptionText from './OrderOptionText';


const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  date: OrderOptionDate,
  text: OrderOptionText,
};
  
const OrderOption = ({name, type, setOrderOption, id, ...otherProps}) => {
  const OptionComponent = optionTypes[type];

  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps}
          setOptionValue={value => setOrderOption({[id]: value})}
        />
      </div>
    );
  }
};
  

OrderOption.propTypes = {
  name: PropTypes.string,
};
  


export default OrderOption;
