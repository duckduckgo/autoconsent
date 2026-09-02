import generateCMPTests from '../playwright/runner';

generateCMPTests('coolblue', [
    'https://www.coolblue.nl/product/918264/kitchenaid-multiply-koekenpan-24-cm.html',
    'https://www.coolblue.de/',
    'https://www.coolblue.be/nl',
]);
