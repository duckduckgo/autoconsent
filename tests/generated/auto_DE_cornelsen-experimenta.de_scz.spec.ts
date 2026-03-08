import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cornelsen-experimenta.de_scz', ['https://cornelsen-experimenta.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
