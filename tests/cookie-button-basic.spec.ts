import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-button-basic', [
    'https://www.dkk.dk/',
    'https://www.koebhund.dk/',
    'https://www.ryfri.no/',
    'https://www.kolos.no/',
    'https://www.skape.no/',
]);
