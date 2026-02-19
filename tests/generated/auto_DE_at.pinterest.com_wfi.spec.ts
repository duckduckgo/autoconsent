import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_at.pinterest.com_wfi', ['https://at.pinterest.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
