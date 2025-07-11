import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thisislocallondon.co.uk_dgp', ['https://www.thisislocallondon.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
