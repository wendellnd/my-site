import moment from 'moment';

export const getAge = () => {
  const currentYear = moment().year();

  const birthYear = moment('09/06/2003', 'DD/MM/YYYY').year();

  return currentYear - birthYear;
};
