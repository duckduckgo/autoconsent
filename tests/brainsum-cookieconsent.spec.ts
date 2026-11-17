import generateCMPTests from '../playwright/runner';

generateCMPTests('brainsum-cookieconsent', [
    'https://www.dgt.es/',
    'https://antequera.es/',
    'https://www.building.lv/',
    'https://www.dansk.nu/',
    'https://www.elektro3.com/',
]);
