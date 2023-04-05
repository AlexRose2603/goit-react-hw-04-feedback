import PropTypes from 'prop-types';
import { Wrapper, StatsList, ListItem, ItemValue } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  totalVotes,
  positivePercentage,
}) => {
  return (
    <Wrapper>
      <StatsList>
        <ListItem>
          Good:
          <ItemValue>{good}</ItemValue>
        </ListItem>
        <ListItem>
          Neutral:
          <ItemValue>{neutral}</ItemValue>
        </ListItem>
        <ListItem>
          Bad:
          <ItemValue>{bad}</ItemValue>
        </ListItem>
        <ListItem>
          Total:
          <ItemValue>{totalVotes}</ItemValue>
        </ListItem>
        <ListItem>
          Positive feedback:
          <ItemValue>{positivePercentage} %</ItemValue>
        </ListItem>
      </StatsList>
    </Wrapper>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalVotes: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
