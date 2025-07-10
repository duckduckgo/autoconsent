import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_benjaminmoore.com_yba', ['https://www.benjaminmoore.com/en-us'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
