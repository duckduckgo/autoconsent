import generateCMPTests from '../playwright/runner';

generateCMPTests('sg-cookie-optin', [
    'https://www.klinikum.uni-heidelberg.de/',
    'https://www.hs-fulda.de/',
    'https://www.uni-bremen.de/',
    'https://www.hs-osnabrueck.de/',
    'https://www.prefa.at/',
    'https://www.caritas-wien.at/',
]);
