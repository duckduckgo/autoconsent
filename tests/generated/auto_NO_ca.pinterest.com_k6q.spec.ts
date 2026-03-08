import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ca.pinterest.com_k6q', ['https://ca.pinterest.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
