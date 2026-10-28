import generateCMPTests from '../playwright/runner';

generateCMPTests('prosiebensat1', [
    'https://www.joyn.ch/',
    'https://www.joyn.de/',
    'https://news.joyn.at/',
    'https://www.prosiebensat1.com/', // English variant
]);
