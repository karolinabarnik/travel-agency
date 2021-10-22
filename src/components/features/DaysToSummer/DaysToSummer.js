import React from 'react';
import { Component } from 'react';
import styles from './DaysToSummer.scss';
import PropTypes from 'prop-types';

class DaysToSummer extends Component {

  static propTypes = {
    descriptionDays: PropTypes.string,
    descriptionDay: PropTypes.string,
  }

  getCountdownDays() {
    const currentDate = new Date();
    const startSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21, 0, 0, 0, 0));
    const endSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 8, 24, 0, 0, 0, 0) - 1);
    const msInDay = 24 * 60 * 60 * 1000;

    if(currentDate >= startSummer) {
      startSummer.setUTCFullYear(currentDate.getUTCFullYear() + 1);
      if(currentDate <= endSummer) {
        return null;
      }
    }

    return Math.round((startSummer.getTime() - currentDate.getTime())/msInDay);
  }

  render() {
    const {descriptionDays, descriptionDay} = this.props;
    const countingDownDays = this.getCountdownDays();

    return (
      <div className={styles.daysToSummer, styles.component}>
        <div className={styles.countingDownDays}>{countingDownDays}</div>
        <div className={styles.summerDescription}>
          {countingDownDays === null ? null : (countingDownDays > 1 ? descriptionDays : descriptionDay)}
        </div>
      </div>
    );
  }
}

export default DaysToSummer;