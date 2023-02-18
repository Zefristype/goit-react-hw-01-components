import { StatList, Section, StatItem, Title } from './Statistics.styled';
import PropTypes from 'prop-types';

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem
              key={id}
              style={{
                backgroundColor: randomHexColor(),
              }}
            >
              <span>{label}</span>
              <span>{percentage}</span>
            </StatItem>
          );
        })}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
