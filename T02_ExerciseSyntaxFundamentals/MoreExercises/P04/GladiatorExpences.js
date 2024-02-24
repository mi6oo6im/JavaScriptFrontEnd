/**
 * js doc
 * @param {number} lostFightsCount 
 * @param {number} helmPrice 
 * @param {number} swordPrice 
 * @param {number} shieldPrice 
 * @param {number} armorPrice 
 */
function gladiExpence(lostFightsCount, helmPrice, swordPrice, shieldPrice, armorPrice) {
    const brokenHelms = Math.trunc(lostFightsCount / 2);
    const brokenSwords = Math.trunc(lostFightsCount / 3);
    const brokenShield = Math.trunc(lostFightsCount / 6);
    const brokenArmors = Math.trunc(lostFightsCount / 12);
    const totalCost = brokenHelms * helmPrice 
        + brokenShield * shieldPrice 
        + brokenSwords * swordPrice 
        + brokenArmors * armorPrice;
    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
}

gladiExpence(7, 2, 3, 4, 5);
gladiExpence(23,12.50, 21.50, 40, 200);
