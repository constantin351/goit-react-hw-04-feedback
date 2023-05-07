import { useState } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onOptionBtnClick = feedbackBtn => {
    switch (feedbackBtn) {
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

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const optionsArray = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsArray}
          onLeaveFeedback={onOptionBtnClick}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={
              countTotalFeedback() === 0 ? 0 : countPositiveFeedbackPercentage()
            }
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
}

export default App;
