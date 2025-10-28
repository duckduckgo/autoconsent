import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tagesraetsel.krupion.de_umo', ['https://tagesraetsel.krupion.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
