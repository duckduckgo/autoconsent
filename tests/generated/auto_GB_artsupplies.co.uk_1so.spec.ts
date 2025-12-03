import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_artsupplies.co.uk_1so', ['https://www.artsupplies.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
