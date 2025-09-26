import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_goodmoodprints.com_9fy', ['https://www.goodmoodprints.com/en-US'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
