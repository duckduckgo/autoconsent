import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_buckinghamshire.gov.uk_0', ['https://www.buckinghamshire.gov.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
