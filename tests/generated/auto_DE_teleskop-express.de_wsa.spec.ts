import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_teleskop-express.de_wsa', ['https://www.teleskop-express.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
