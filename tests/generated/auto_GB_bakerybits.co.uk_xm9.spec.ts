import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bakerybits.co.uk_xm9', ['https://www.bakerybits.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
