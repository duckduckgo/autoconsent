import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bibliotheque-pestalozzi.ch_l02', ['https://bibliotheque-pestalozzi.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
