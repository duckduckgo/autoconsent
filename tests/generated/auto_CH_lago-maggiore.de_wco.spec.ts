import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lago-maggiore.de_wco', ['https://www.lago-maggiore.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
