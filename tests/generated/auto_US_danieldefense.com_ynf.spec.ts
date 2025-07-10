import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_danieldefense.com_ynf', ['https://danieldefense.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
