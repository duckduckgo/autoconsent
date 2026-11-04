import generateCMPTests from '../playwright/runner';

generateCMPTests('koch-cookieconsent', [
    'https://www.zsclions.ch/',
    'https://www.gcz.ch/',
    'https://www.swiss-athletics.ch/',
    'https://www.swiss-ski.ch/',
    'https://www.lauberhorn.ch/',
]);
