import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_no.pinterest.com_a5p', ['https://no.pinterest.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
