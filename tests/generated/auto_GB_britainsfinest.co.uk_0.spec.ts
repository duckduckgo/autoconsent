import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_britainsfinest.co.uk_0', ['https://www.britainsfinest.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
