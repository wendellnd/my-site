import moment from 'moment';

export const getAge = () => {
  const dateOfBirth = moment('09/06/2003', 'DD/MM/YYYY');

  const age = moment().diff(dateOfBirth, 'years');

  return age;
};
