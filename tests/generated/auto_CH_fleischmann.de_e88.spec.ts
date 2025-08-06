import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fleischmann.de_e88', ['https://www.fleischmann.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
