import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pta-in-love.de_62z', ['https://www.pta-in-love.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
