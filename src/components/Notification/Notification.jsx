import PropTypes from 'prop-types';
import { InfoText } from './Notification.styled';
export const Notification = ({ message }) => {
  return <InfoText>{message}</InfoText>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
