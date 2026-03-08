import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_filterboerse.ch_nbk', ['https://filterboerse.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
