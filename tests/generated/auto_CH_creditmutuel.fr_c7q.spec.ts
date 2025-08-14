import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_creditmutuel.fr_c7q', ['https://www.creditmutuel.fr/home/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
