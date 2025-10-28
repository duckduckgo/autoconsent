import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ita-airways.com_wdi', ['https://www.ita-airways.com/de_ch'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
