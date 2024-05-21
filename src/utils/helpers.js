export const normalizePrice = price => {
  const strPrice = String(price);

  return `€${strPrice.slice(-9, -6)} ${strPrice.slice(-6, -3)} ${strPrice.slice(
    -3
  )},00`;
};
