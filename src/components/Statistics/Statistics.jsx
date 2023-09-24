import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsList } from './statistics.styled';

const Statistics = ({ stats, sum, positivePercantage }) => {
  return (
    <>
      <StatisticsList>
        <li>Good: {stats.good}</li>
        <li>Neutral: {stats.neutral}</li>
        <li>Bad: {stats.bad}</li>
        <li>Total: {sum}</li>
        <li>Positive feedback: {positivePercantage}%</li>
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  sum: PropTypes.number.isRequired,
  positivePercantage: PropTypes.number.isRequired,
};

export default Statistics;
