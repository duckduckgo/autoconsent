import generateCMPTests from '../playwright/runner';

generateCMPTests('skisport', [
    'https://www.skisport.dk/',
    'https://www.skidresor.com/',
    'https://www.skisport.be/',
    'https://www.skisport.es/',
    'https://www.skisports.it/',
]);
