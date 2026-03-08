import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_blindparts.co.uk_crl', ['https://blindparts.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
