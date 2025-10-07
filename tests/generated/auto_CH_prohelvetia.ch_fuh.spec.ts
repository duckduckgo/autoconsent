import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_prohelvetia.ch_fuh', ['https://prohelvetia.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
