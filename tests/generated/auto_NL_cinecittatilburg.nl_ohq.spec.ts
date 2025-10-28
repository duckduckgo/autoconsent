import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_cinecittatilburg.nl_ohq', ['https://cinecittatilburg.nl/en/films-meer-english/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
