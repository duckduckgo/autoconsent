import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_transparent-beraten.de_fha', ['https://www.transparent-beraten.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
