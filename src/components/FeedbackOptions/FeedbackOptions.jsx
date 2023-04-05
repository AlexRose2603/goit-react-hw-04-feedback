import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((item, index) => {
    return (
      <Button key={index} type="button" onClick={() => onLeaveFeedback(item)}>
        {item}
      </Button>
    );
  });
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
