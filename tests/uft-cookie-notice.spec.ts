import generateCMPTests from '../playwright/runner';

generateCMPTests('uft-cookie-notice', [
    'https://www.fribourg.ch/',
    'https://www.la-gruyere.ch/',
    'https://www.schwarzsee.ch/',
    'https://www.terroir-fribourg.ch/',
]);
