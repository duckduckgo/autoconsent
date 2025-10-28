import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gallica.bnf.fr_k8c', ['https://gallica.bnf.fr/accueil/fr/html/accueil-fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
