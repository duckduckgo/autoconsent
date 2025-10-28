import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_deutsches-museum.de_vay', ['https://www.deutsches-museum.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
