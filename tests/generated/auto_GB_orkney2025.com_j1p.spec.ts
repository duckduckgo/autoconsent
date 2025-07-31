import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_orkney2025.com_j1p', ['https://www.orkney2025.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
