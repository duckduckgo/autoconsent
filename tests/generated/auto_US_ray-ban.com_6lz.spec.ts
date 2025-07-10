import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_ray-ban.com_6lz', ['https://www.ray-ban.com/usa'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
