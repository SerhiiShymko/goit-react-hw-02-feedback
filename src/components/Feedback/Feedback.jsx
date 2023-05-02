import css from './Feedback.module.css';
import { Component } from 'react';
// import PropTypes from 'prop-types';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const buttonName = e.target.name;

    this.setState(prev => {
      return {
        [buttonName]: prev[buttonName] + 1,
      };
    });
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
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.wrapper}>
        <h1>Please leave feedback</h1>
        <div className={css['button__state']}>
          <button name="good" onClick={this.handleClick}>
            Good
          </button>
          <button name="neutral" onClick={this.handleClick}>
            Neutral
          </button>
          <button name="bad" onClick={this.handleClick}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <ul className={css.list}>
          <li>
            Good: <p>{this.state.good}</p>
          </li>
          <li>
            Neutral: <p>{this.state.neutral}</p>
          </li>
          <li>
            Bad: <p>{this.state.bad}</p>
          </li>
          <li>
            Total: <p>{totalFeedback}</p>
          </li>
          <li>
            Positive feedback: <p>{positiveFeedbackPercentage}%</p>
          </li>
        </ul>
      </div>
    );
  }
}
export default Feedback;
