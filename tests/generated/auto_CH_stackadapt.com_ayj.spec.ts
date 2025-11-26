import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_stackadapt.com_ayj', ['https://www.stackadapt.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
