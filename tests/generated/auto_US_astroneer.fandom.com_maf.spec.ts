import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_astroneer.fandom.com_maf', ['https://astroneer.fandom.com/wiki/Astroneer_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
