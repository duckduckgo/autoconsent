import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stromvergleich.de_02l', ['https://www.stromvergleich.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
