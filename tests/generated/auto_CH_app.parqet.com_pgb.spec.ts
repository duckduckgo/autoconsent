import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_app.parqet.com_pgb', ['https://app.parqet.com/markets'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
