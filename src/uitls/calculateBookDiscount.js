export function calculateDiscount(price, sellPrice) {
  if (price < sellPrice) {
    return null;
  }
  const discount = price - sellPrice;
  const discountPercentage = ((discount / price) * 100).toFixed(0);
  return discountPercentage;
}
