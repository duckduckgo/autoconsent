import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_monsterhunter.fandom.com_ryd', ['https://monsterhunter.fandom.com/wiki/Monster_Hunter_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
