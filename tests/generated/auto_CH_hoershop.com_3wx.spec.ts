import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hoershop.com_3wx', ['https://www.hoershop.com/index.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
