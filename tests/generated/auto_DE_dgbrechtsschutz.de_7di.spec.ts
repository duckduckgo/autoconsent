import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dgbrechtsschutz.de_7di', ['https://www.dgbrechtsschutz.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
