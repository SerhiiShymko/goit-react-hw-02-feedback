import PropTypes from 'prop-types';
import css from './Section.module.css';

function Section({ title, children }) {
  return (
    <Section className={css.section}>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </Section>
  );
}

Section.prototype = {
  title: PropTypes.string,
};

export default Section;
