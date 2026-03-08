import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eazymatic-torantriebe.ch_zjc', ['https://eazymatic-torantriebe.ch/126-de-Startseite.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
