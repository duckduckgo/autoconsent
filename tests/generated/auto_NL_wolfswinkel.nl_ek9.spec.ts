import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wolfswinkel.nl_ek9', ['https://www.wolfswinkel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
