import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_powercuts.nationalgrid.co.uk_srb', ['https://powercuts.nationalgrid.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
