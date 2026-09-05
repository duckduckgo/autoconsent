import generateCMPTests from '../playwright/runner';

generateCMPTests('cookiecuttr', [
    'https://www.esa.int/',
    'https://hartgeld.com/',
    'https://newsroom.toyota.eu/2019-trd-performance-line-accessories-for-gt86/',
    'https://nieuws.schiphol.nl/',
    'https://media.dubaiairports.ae/',
]);
