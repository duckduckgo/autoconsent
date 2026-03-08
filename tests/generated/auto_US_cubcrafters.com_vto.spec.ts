import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cubcrafters.com_vto', ['https://cubcrafters.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
