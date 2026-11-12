import generateCMPTests from '../playwright/runner';

generateCMPTests('vdg-cookies', [
    'https://www.geneve.ch/',
    'https://www.genevalux.ch/',
    'https://www.fmac-geneve.ch/',
    'https://www.jardinbotaniquegeneve.ch/',
]);
