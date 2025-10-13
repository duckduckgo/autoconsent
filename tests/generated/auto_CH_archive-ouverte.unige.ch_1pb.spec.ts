import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_archive-ouverte.unige.ch_1pb', ['https://archive-ouverte.unige.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
