import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gesundheit.gv.at_1c2', ['https://www.gesundheit.gv.at/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
