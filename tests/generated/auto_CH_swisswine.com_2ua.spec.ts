import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swisswine.com_2ua', ['https://www.swisswine.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
