import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_esprit.presse.fr_5sj', ['https://esprit.presse.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
