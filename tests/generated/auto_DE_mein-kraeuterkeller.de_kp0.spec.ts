import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mein-kraeuterkeller.de_kp0', ['https://mein-kraeuterkeller.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
