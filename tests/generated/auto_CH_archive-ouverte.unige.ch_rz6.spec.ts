import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_archive-ouverte.unige.ch_rz6', ['https://archive-ouverte.unige.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
