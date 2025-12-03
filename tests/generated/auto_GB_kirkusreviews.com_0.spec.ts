import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kirkusreviews.com_0', ['https://www.kirkusreviews.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
