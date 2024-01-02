function calculateRatio(antecedent: number, consequent: number) {
  return Math.round((consequent / antecedent) * 1000) / 1000;
}

function multiplyRatio(number: number, ratio: number) {
  return Math.round(number * ratio * 10) / 10;
}

export { calculateRatio, multiplyRatio };
