import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_auswandern-info.com_qt3', ['https://auswandern-info.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
