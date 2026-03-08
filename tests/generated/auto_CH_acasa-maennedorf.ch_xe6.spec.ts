import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_acasa-maennedorf.ch_xe6', ['https://acasa-maennedorf.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
