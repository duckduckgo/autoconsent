import generateCMPTests from '../playwright/runner';

generateCMPTests('sportstiming', [
    'https://www.sportstiming.dk/',
    'https://www.sportstiming.se/',
    'https://www.sportstiming.no/',
    'https://www.sportstiming.de/',
]);
