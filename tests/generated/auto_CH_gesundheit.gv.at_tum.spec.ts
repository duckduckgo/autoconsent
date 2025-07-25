import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gesundheit.gv.at_tum', ['https://www.gesundheit.gv.at/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
