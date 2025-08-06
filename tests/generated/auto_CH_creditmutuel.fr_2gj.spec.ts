import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_creditmutuel.fr_2gj', ['https://www.creditmutuel.fr/home/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
