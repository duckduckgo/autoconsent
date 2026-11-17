import generateCMPTests from '../playwright/runner';

generateCMPTests('cookiecuttr', [
    'https://www.esa.int/',
    'https://hartgeld.com/',
    'https://bachheimer.com/',
    'https://news.keckmedicine.org/',
    'https://newsroom.odido.nl/',
    'https://nieuws.schiphol.nl/',
]);
