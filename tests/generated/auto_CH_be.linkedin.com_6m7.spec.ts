import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_be.linkedin.com_6m7', ['https://be.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
