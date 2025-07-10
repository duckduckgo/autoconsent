import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_chemistdirect.co.uk_h8e', ['https://www.chemistdirect.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
