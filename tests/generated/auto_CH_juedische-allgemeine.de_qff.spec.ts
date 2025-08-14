import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_juedische-allgemeine.de_qff', ['https://www.juedische-allgemeine.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
