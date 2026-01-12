import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_koelner-philharmonie.de_1nx', ['https://www.koelner-philharmonie.de/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
