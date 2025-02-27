
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: 'ILS',
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('he-IL').format(value);
};

export const formatPercentage = (value: number): string => {
  return new Intl.NumberFormat('he-IL', {
    style: 'percent',
    maximumFractionDigits: 1,
  }).format(value / 100);
};
