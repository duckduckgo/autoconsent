import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.whileint.com_oa6', ['https://de.whileint.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
