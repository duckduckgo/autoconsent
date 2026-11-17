import generateCMPTests from '../playwright/runner';

generateCMPTests('typo3-cookieconsent', [
    'https://www.swiss-ski.ch/',
    'https://www.gcz.ch/',
    'https://www.swiss-athletics.ch/',
    'https://www.curling.ch/',
    'https://www.zsclions.ch/',
    'https://www.lauberhorn.ch/',
]);
