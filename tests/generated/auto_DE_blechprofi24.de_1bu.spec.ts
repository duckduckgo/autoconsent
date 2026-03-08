import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blechprofi24.de_1bu', ['https://blechprofi24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
