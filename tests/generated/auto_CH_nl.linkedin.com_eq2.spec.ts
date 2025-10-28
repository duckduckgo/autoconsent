import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nl.linkedin.com_eq2', ['https://nl.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
