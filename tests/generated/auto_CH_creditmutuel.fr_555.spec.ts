import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_creditmutuel.fr_555', ['https://www.creditmutuel.fr/home/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
