import generateCMPTests from '../playwright/runner';

generateCMPTests('etracker', [
    'https://www.lotto-hessen.de/',
    'https://www.gabor.com/',
    'https://www.nanu-nana.de/',
    'https://www.baulogistik-online.de/',
]);
