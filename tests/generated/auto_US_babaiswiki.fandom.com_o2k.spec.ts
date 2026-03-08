import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_babaiswiki.fandom.com_o2k', ['https://babaiswiki.fandom.com/wiki/Baba_Is_You_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
