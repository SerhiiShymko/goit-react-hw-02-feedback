import Feedback from 'components/Feedback/Feedback';
// import Section from './components/Section/Section';

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
        <Feedback />
      </section>
    </div>
  );
};
