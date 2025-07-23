import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bucksfreepress.co.uk_8nw', ['https://www.bucksfreepress.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
