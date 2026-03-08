import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cnc.fandom.com_htj', ['https://cnc.fandom.com/wiki/Command_%26_Conquer_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
