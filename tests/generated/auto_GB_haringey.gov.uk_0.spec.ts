import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_haringey.gov.uk_0', ['https://www.haringey.gov.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
