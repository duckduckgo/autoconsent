import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_prohelvetia.ch_wbi', ['https://prohelvetia.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
