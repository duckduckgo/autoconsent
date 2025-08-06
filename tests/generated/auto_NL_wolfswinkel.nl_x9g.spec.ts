import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wolfswinkel.nl_x9g', ['https://www.wolfswinkel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
