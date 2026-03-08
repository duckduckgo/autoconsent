import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_frauenunternehmen.ch_f8l', ['https://frauenunternehmen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
