import generateCMPTests from '../playwright/runner';

generateCMPTests('schuurman-schoenen', [
    'https://www.schuurman-schoenen.nl/',
    'https://www.schuurman-schoenen.be/',
    'https://www.schuurman-schuhe.de/',
]);
