import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_diebesten-online.de_xxd', ['https://diebesten-online.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
