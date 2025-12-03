import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rundfunkbeitrag.de_g4y', ['https://www.rundfunkbeitrag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
