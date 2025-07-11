import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_yourlocalguardian.co.uk_geq', ['https://www.yourlocalguardian.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
