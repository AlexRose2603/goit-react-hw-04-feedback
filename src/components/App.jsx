import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalVotes = good + neutral + bad;
    return totalVotes;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const totalVotes = good + neutral + bad;
    const percentage = Math.round((good / totalVotes) * 100);
    return percentage;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const totalVotes = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalVotes === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalVotes={totalVotes}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </Container>
    );
  }
}
