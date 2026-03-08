import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_brillenwerk24.de_n0z', ['https://brillenwerk24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
