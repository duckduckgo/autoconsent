import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_afv.ch_qwe', ['https://www.afv.ch/aargauer-fussballverband.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
