import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bitrefill.com_uve', ['https://www.bitrefill.com/no/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
