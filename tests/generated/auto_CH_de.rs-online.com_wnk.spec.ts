import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.rs-online.com_wnk', ['https://de.rs-online.com/web/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
