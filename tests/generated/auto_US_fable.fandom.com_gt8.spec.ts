import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fable.fandom.com_gt8', ['https://fable.fandom.com/wiki/Main_Page'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
