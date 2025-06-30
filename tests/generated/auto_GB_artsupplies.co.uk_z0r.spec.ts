import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_artsupplies.co.uk_z0r', ['https://www.artsupplies.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
