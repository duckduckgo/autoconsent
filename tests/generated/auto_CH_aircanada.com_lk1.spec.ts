import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aircanada.com_lk1', ['https://www.aircanada.com/home/ch/en/aco/flights'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
