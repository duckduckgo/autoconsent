import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_asheron.fandom.com_0ok', ['https://asheron.fandom.com/wiki/Home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
