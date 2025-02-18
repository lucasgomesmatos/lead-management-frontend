export function currencyFormatter(value: number) {
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

  return formattedValue;
}

export function formatName(name: string) {
  return (
    name.charAt(0).toLocaleUpperCase() + name.charAt(1).toLocaleUpperCase()
  );
}
