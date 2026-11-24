import generateCMPTests from '../playwright/runner';

generateCMPTests('anwalt-suchservice', [
    'https://www.anwalt-suchservice.de/',
    'https://www.anwaltssuche.de/',
    'https://www.fachanwaltsuche.de/',
]);
