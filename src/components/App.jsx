// import Feedback from 'components/Feedback/Feedback';
// import Section from './Section';
import FeedbackOptions from './FeedbackOptions';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <section>
        <FeedbackOptions />
      </section>
    </div>
  );
};
