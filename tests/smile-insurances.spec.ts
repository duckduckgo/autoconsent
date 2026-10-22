import generateCMPTests from '../playwright/runner';

generateCMPTests('smile-insurances', [
    'https://www.smile-insurances.com/ch/main/de/home.html',
    'https://www.smile-insurances.com/ch/main/fr/home.html',
]);
