import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bandenleader.nl_slh', ['https://www.bandenleader.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
