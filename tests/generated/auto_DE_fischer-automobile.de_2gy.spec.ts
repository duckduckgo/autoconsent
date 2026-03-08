import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fischer-automobile.de_2gy', ['https://fischer-automobile.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
