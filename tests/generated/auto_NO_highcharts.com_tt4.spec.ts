import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_highcharts.com_tt4', ['https://www.highcharts.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
