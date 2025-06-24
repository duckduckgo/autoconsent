import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_williamhill.com_0', ['https://www.williamhill.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
