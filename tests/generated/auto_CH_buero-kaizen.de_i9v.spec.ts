import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_buero-kaizen.de_i9v', ['https://www.buero-kaizen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
