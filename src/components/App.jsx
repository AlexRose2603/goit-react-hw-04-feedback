import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    switch (event) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const totalVotes = good + neutral + bad;
    return totalVotes;
  };
  const countPositiveFeedbackPercentage = () => {
    const totalVotes = good + neutral + bad;
    const percentage = Math.round((good / totalVotes) * 100);
    return percentage;
  };

  const totalVotes = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
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
};
