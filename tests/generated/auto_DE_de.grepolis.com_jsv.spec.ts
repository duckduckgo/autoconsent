import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.grepolis.com_jsv', ['https://de-play.grepolis.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
