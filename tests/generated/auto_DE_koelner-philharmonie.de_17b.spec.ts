import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_koelner-philharmonie.de_17b', ['https://www.koelner-philharmonie.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
