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

  render() {
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
        </ul>
      </div>
    );
  }
}
export default Feedback;
