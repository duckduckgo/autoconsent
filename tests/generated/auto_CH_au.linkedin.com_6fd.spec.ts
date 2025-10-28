import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_au.linkedin.com_6fd', ['https://au.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
