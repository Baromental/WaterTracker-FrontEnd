import moment from 'moment';

const formatDate = dateString => {
  return moment(new Date(dateString)).format('HH:mm A');
};

export default formatDate;
