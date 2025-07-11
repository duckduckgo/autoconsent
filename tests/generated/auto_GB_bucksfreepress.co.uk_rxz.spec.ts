import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bucksfreepress.co.uk_rxz', ['https://www.bucksfreepress.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
