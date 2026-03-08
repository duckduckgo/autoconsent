import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_careers.lifetime.life_stw', ['https://careers.lifetime.life/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
