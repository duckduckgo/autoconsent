import generateCMPTests from '../playwright/runner';

const urls = [
    'https://www.banknorwegian.no/',
    'https://www.banknorwegian.se/',
    'https://www.banknorwegian.dk/',
    'https://www.banknorwegian.fi/',
    'https://www.banknorwegian.de/',
    'https://www.banknorwegian.es/',
];

generateCMPTests('banknorwegian', urls, { mobile: true });
generateCMPTests('banknorwegian', urls, { mobile: false });
