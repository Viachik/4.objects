"use strict";
function solveEquation(a, b, c) {
  // Решить уравнение
  let D = b**2 - 4*a*c;

  if (D < 0) {
    return "Нет решений";
  }
	return D = 0 ? [-b/2*a] : [
			(-b + Math.sqrt(D))/2*a,
			(-b - Math.sqrt(D))/2*a
		]
}


console.log(solveEquation(1, 1, 1))

/*
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
*/