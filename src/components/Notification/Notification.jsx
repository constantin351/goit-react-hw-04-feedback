import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ message }) => {
  return <h2 className={css.notification_title}>{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
