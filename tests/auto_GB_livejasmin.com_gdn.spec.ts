import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_livejasmin.com_gdn', ['https://www.livejasmin.com/en/girls'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
