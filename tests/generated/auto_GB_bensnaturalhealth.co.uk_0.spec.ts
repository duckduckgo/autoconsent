import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bensnaturalhealth.co.uk_0', ['https://www.bensnaturalhealth.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
