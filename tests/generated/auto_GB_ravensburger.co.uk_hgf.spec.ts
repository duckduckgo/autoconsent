import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ravensburger.co.uk_hgf', ['https://www.ravensburger.co.uk/en-GB'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
