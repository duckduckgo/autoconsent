import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_securesafe.com_39t', ['https://www.securesafe.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
