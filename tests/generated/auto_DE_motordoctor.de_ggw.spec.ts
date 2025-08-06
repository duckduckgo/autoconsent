import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_motordoctor.de_ggw', ['https://www.motordoctor.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
