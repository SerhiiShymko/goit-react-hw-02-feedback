import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import { Component } from 'react';
import Statistics from './Statistics';
// import Warning from './Warning';
import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const option = e.target.name;

    if (option) {
      this.setState(prev => {
        return {
          [option]: prev[option] + 1,
        };
      });
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    const handleClick = this.handleClick;

    return (
      <div className={css.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
