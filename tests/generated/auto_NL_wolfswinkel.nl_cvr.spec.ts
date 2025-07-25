import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wolfswinkel.nl_cvr', ['https://www.wolfswinkel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
