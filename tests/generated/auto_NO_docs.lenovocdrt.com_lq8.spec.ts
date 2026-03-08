import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_docs.lenovocdrt.com_lq8', ['https://docs.lenovocdrt.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
