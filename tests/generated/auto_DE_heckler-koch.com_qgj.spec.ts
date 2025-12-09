import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_heckler-koch.com_qgj', ['https://www.heckler-koch.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
