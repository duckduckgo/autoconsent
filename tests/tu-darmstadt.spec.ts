import generateCMPTests from '../playwright/runner';

generateCMPTests('tu-darmstadt', [
    'https://www.tu-darmstadt.de/',
    'https://www.intern.tu-darmstadt.de/',
    'https://www.ulb.tu-darmstadt.de/',
    'https://www.wi.tu-darmstadt.de/',
]);
