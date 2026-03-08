import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_feheroes.fandom.com_hsj', ['https://feheroes.fandom.com/wiki/Main_Page'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
