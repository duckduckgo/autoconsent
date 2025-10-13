import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gemeinderat-zuerich.ch_qgv', ['https://www.gemeinderat-zuerich.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
