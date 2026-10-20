import generateCMPTests from '../playwright/runner';

generateCMPTests('swedbank-cookie-banner', [
    'https://www.sparbankenskane.se/',
    'https://www.swedbank.se/',
    'https://www.sormlandssparbank.se/',
    'https://www.varbergssparbank.se/',
]);
