import generateCMPTests from '../playwright/runner';

generateCMPTests('ccm19', [
    'https://www.ofen.de/',
    'https://www.hm.edu/',
    'https://www.e-fellows.net/',
    'https://www.trauer.de/',
    'https://www.wiener-staatsoper.at/',
    'https://www.computerwissen.de/',
    'https://www.wohnnet.at/',
]);
