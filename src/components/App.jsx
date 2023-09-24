import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Feedback from './Feedback';
import Statistics from './Statistics';
import { Section } from './ui/Section.jsx';
import { Container } from './app.styled.js';
import { Notification } from './Notification';

let sum = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class App extends Component {
  state = {
    ...sum,
  };

  countTotalFeedback = () => {
    const totalValue = Object.values(this.state).reduce((counter, stat) => {
      return counter + stat;
    }, 0);
    return totalValue;
  };

  handleClick = e => {
    const currentValue = e.target.id;
    this.setState(prevState => {
      switch (currentValue) {
        case 'good':
          return {
            good: (prevState.good += 1),
          };
        case 'bad':
          return {
            bad: (prevState.bad += 1),
          };
        case 'neutral':
          return {
            neutral: (prevState.neutral += 1),
          };
        default:
          return;
      }
    });
  };

  countPositiveFeedbackPercentage() {
    let positivePercentage = 0;
    if (this.state.good > 0) {
      positivePercentage = (100 / this.countTotalFeedback()) * this.state.good;
      const numberedPositivePersatage = Number(positivePercentage);
      const roundedPositivePersatage = Math.ceil(numberedPositivePersatage);
      return roundedPositivePersatage;
    }
    return positivePercentage;
  }

  render() {
    return (
      <Container>
        <Section title={`Please leave feedback`}>
          <Feedback handleFunc={this.handleClick} />
        </Section>
        <Section title={`Statistics`}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              stats={this.state}
              sum={this.countTotalFeedback()}
              positivePercantage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification massage={`There is no feedback`} />
          )}
        </Section>
      </Container>
    );
  }
}

App.propTypes = {
  sum: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
