import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_migrosprintshop.ch_h60', ['https://www.migrosprintshop.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
