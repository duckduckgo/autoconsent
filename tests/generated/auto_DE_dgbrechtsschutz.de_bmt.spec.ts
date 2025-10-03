import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dgbrechtsschutz.de_bmt', ['https://www.dgbrechtsschutz.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
