'use strict';

const city = 'Kyiv';
const year = 988;
const flag = true;

const sameCity = 'Kyiv';
const nextYear = 989;

console.log('\n[ === ] \n');

console.log(city === 'Kyiv' ? 'city = Kyiv' : 'city ≠ Kyiv');
console.log(year === 988 ? 'year = 988' : 'year ≠ 988');
console.log(flag ? 'flag = true' : 'flag ≠ true');

console.log(city === sameCity ? 'city = sameCity' : 'city ≠ sameCity');
console.log(year === nextYear ? 'year = nextYear' : 'year ≠ nextYear');

console.log('\n[ !== ]\n');

console.log(city !== sameCity ? 'city ≠ sameCity' : 'city = sameCity');
console.log(year !== nextYear ? 'year ≠ nextYear' : 'year = nextYear');

console.log('\n[ >=, >, <=, < ]\n');

console.log(year < nextYear ? 'year < nextYear' : 'year >= nextYear');
console.log(year <= nextYear ? 'year <= nextYear' : 'year > nextYear');
console.log(year > nextYear ? 'year > nextYear' : 'year <= nextYear');
console.log(year >= nextYear ? 'year >= nextYear' : 'year < nextYear');