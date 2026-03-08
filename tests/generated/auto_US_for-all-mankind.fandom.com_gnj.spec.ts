import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_for-all-mankind.fandom.com_gnj', ['https://for-all-mankind.fandom.com/wiki/For_All_Mankind_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
