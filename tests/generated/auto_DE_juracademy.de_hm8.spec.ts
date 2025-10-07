import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_juracademy.de_hm8', ['https://ankuendigung.juracademy.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
