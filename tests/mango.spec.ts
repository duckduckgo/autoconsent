import generateCMPTests from '../playwright/runner';

generateCMPTests('mango', [
    'https://shop.mango.com/us/en/p/women/sweaters-and-cardigans/sweaters/round-neck-knitted-sweater/67024021/08/00',
    'https://shop.mango.com/de/de/h/damen',
    'https://shop.mango.com/gb/en/h/women',
]);
