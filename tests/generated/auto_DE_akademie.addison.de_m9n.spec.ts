import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_akademie.addison.de_m9n', ['https://akademie.addison.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
