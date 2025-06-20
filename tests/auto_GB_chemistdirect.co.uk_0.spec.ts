import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_chemistdirect.co.uk_0', ['https://www.chemistdirect.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
