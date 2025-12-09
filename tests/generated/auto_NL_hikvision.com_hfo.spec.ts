import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hikvision.com_hfo', ['https://www.hikvision.com/europe/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
