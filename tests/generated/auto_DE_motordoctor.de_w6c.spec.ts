import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_motordoctor.de_w6c', ['https://www.motordoctor.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
