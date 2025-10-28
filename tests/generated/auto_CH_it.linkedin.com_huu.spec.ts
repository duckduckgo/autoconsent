import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_it.linkedin.com_huu', ['https://it.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
