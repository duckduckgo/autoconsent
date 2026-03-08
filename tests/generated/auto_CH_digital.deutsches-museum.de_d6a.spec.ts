import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_digital.deutsches-museum.de_d6a', ['https://digital.deutsches-museum.de/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
