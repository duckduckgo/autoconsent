import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.airtahitinui.com_i68', ['https://de.airtahitinui.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
