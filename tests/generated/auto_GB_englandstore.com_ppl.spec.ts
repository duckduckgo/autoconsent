import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_englandstore.com_ppl', ['https://www.englandstore.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
