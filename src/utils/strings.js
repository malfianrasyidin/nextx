export const formatCurrency = (string) =>
  new Intl.NumberFormat().format(string);

export const getGenderName = (gender) => (gender === 'm' ? 'Male' : 'Female');
