import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_club.auto-doc.ch_gtn', ['https://club.auto-doc.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
