import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_livejasmin.com_man', ['https://www.livejasmin.com/en/girls'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
