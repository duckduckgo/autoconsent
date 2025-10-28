import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_doornroosje.nl_lz9', ['https://www.doornroosje.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
