import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_benjaminmoore.com_ai1', ['https://www.benjaminmoore.com/en-us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
