export default {
  total(obj, { category }) {
    const pricing = obj.pricing();
    if (pricing.isValid()) {
      return pricing.total(category);
    }
    return null;
  },
  unitPrice(obj) {
    const pricing = obj.pricing();
    if (pricing.isValid()) {
      return pricing.unitPrice();
    }
    return null;
  }
};
