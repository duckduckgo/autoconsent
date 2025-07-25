import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rundfunkbeitrag.de_2d4', ['https://www.rundfunkbeitrag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
