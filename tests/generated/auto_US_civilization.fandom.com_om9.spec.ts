import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_civilization.fandom.com_om9', ['https://civilization.fandom.com/wiki/Civilization_Games_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
