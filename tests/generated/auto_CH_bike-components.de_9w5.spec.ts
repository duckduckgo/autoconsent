import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bike-components.de_9w5', ['https://www.bike-components.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
