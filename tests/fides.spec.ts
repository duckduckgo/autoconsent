import generateCMPTests from '../playwright/runner';

generateCMPTests('fides', [
    'https://www.nytimes.com/',
    'https://www.nytimes.com/games/connections',
    'https://nextjs.org/',
    'https://wetransfer.com/',
    'https://arstechnica.com/',
]);
