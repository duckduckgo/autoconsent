import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_modellbahnshop.de_l2v', ['https://www.modellbahnshop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
