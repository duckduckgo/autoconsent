import generateCMPTests from '../playwright/runner';

generateCMPTests('bouvet-cookiepanel', [
    'https://www.helsedirektoratet.no/',
    'https://www.forsvaret.no/',
    'https://www.met.no/',
    'https://www.helfo.no/',
    'https://www.bouvet.se/',
]);
