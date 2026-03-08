import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dekanat-darmstadt.de_829', ['https://dekanat-darmstadt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
