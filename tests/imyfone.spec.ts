import generateCMPTests from '../playwright/runner';

generateCMPTests('imyfone', [
    'https://jp.imyfone.com/',
    'https://www.imyfone.com/',
    'https://de.imyfone.com/',
    'https://kr.imyfone.com/',
    'https://www.imyfone.de/',
]);
