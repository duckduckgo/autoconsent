import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mitarbeiterservice.bayern.de_quh', ['https://www.mitarbeiterservice.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
