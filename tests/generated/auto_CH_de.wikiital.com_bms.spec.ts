import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.wikiital.com_bms', ['https://de.wikiital.com/wiki/27_ottobre'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
