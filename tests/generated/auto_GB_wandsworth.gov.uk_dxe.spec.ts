import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wandsworth.gov.uk_dxe', ['https://www.wandsworth.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
