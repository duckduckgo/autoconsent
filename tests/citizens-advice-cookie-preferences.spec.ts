import generateCMPTests from '../playwright/runner';

generateCMPTests('citizens-advice-cookie-preferences', [
    'https://www.citizensadvice.org.uk/',
    'https://smartmetercheck.citizensadvice.org.uk/',
]);
