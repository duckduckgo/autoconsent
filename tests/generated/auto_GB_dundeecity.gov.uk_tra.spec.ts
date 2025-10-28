import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dundeecity.gov.uk_tra', ['https://www.dundeecity.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
