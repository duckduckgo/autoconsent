import generateCMPTests from '../playwright/runner';

generateCMPTests('incomit', [
    'https://dab-lejerbo.dk/',
    'https://www.aarhusbolig.dk/',
    'https://www.randersbolig.dk/',
    'https://www.pks.dk/',
]);
