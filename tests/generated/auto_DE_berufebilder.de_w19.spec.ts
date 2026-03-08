import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berufebilder.de_w19', ['https://berufebilder.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
