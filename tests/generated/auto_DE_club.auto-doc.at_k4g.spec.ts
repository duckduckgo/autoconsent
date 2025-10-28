import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_club.auto-doc.at_k4g', ['https://club.auto-doc.at/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
