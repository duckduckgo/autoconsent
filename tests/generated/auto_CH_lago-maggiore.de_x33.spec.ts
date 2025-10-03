import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lago-maggiore.de_x33', ['https://www.lago-maggiore.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
