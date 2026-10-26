import generateCMPTests from '../playwright/runner';

generateCMPTests('jollyroom', [
    'https://www.jollyroom.se/',
    'https://www.jollyroom.no/',
    'https://www.jollyroom.fi/',
    'https://www.jollyroom.dk/',
    'https://www.jollyroom.de/',
]);
