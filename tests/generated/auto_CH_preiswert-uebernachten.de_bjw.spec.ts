import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_preiswert-uebernachten.de_bjw', ['https://www.preiswert-uebernachten.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
