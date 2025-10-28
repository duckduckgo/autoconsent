import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_transparent-beraten.de_e68', ['https://www.transparent-beraten.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
