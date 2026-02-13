import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_crazypatterns.net_di3', ['https://www.crazypatterns.net/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
