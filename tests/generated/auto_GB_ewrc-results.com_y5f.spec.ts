import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ewrc-results.com_y5f', ['https://ewrc-results.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
