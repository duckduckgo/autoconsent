import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_buecherserien.de_un5', ['https://www.buecherserien.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
