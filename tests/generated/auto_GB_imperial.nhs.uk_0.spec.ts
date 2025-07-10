import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_imperial.nhs.uk_0', ['https://www.imperial.nhs.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
