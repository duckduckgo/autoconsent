import generateCMPTests from '../playwright/runner';

generateCMPTests('pandectes', [
    'https://hollandscountryclothing.co.uk/',
    'https://cluse.com/',
    'https://www.parent.com/',
    'https://swedishstockings.com/', // full-page overlay ("blocking") banner variant
]);
