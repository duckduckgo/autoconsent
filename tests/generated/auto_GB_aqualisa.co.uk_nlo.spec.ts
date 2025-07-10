import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_aqualisa.co.uk_nlo', ['https://www.aqualisa.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
