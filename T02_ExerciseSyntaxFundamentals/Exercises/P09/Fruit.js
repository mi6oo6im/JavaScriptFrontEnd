function fruit (fruit, weightGr, priceKg) {
    const weightKg = weightGr / 1000;
    const cost = weightKg * priceKg;
    console.log(`I need $${cost.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}


fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)