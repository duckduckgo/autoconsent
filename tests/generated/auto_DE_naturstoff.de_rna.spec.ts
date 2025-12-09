import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_naturstoff.de_rna', ['https://www.naturstoff.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
