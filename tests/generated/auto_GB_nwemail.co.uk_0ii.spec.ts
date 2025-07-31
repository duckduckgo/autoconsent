import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nwemail.co.uk_0ii', ['https://www.nwemail.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
