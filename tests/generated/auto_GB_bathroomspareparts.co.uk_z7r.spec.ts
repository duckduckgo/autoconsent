import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bathroomspareparts.co.uk_z7r', ['https://www.bathroomspareparts.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
