import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rasppishop.de_t0b', ['https://www.rasppishop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
