import generateCMPTests from '../playwright/runner';

generateCMPTests('acos-cms', [
    'http://afk.no/',
    'https://www.rogfk.no/',
    'https://mrfylke.no/',
    'https://www.lorenskog.kommune.no/',
    'https://www.gjovik.kommune.no/',
]);
