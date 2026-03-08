import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sitzplangenerator.de_df9', ['http://www.sitzplangenerator.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
