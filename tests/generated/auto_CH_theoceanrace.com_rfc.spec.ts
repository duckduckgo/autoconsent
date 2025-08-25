import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_theoceanrace.com_rfc', ['https://www.theoceanrace.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
