import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.diskinternals.com_f7o', ['https://de.diskinternals.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
