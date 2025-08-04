import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_prohelvetia.ch_1bg', ['https://prohelvetia.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
