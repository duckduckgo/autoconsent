import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_teleskop-express.de_48l', ['https://www.teleskop-express.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
