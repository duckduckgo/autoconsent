import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_buitengewoonbuitenpost.nl_btm', ['https://buitengewoonbuitenpost.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
