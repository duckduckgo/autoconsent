import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chur.graubuenden.ch_sdr', ['https://www.chur.graubuenden.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
