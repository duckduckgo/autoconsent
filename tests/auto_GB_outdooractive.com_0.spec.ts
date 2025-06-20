import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_outdooractive.com_0', ['https://www.outdooractive.com/en/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
