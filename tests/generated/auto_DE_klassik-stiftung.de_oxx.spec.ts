import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klassik-stiftung.de_oxx', ['https://www.klassik-stiftung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
