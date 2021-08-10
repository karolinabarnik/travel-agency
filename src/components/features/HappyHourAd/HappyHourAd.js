import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

const HappyHourAd = ({titleText}) => (
  <div>
    <h2 className={styles.title}>{titleText}</h2>
  </div>
);

HappyHourAd.propTypes = {
  titleText: PropTypes.string,
};

export default HappyHourAd;