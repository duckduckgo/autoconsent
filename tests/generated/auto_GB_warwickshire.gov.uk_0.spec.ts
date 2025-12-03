import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_warwickshire.gov.uk_0', ['https://www.warwickshire.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
