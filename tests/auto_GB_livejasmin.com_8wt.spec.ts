import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_livejasmin.com_8wt', ['https://www.livejasmin.com/en/girls'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
