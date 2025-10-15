export const formatCurrency = (value: number, currency = '₹') => 
  `${currency}${value.toFixed(2)}`;

export const capitalize = (str: string) => 
  str.charAt(0).toUpperCase() + str.slice(1);