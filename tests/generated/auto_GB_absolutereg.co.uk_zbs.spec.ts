import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_absolutereg.co.uk_zbs', ['https://absolutereg.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
