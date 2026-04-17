import generateCMPTests from '../playwright/runner';

generateCMPTests('osano', [
    'https://www.weathertech.com/',
    'https://www.bigagnes.com/',
    'https://www.bobsredmill.com/',
    'https://www.summithealth.com/',
]);
